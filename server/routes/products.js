const express = require('express');
const router = express.Router();
const db = require('../db/database');

router.get('/', (req, res) => {
    db.all("SELECT * FROM products", (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

router.post('/', (req, res) => {
    const { id, name } = req.body;
    if (!id || !name) {
        res.status(400).json({ error: 'Please provide product id and name' });
        return;
    }
    const stmt = db.prepare("INSERT INTO products VALUES (?, ?)");
    stmt.run(id, name, function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: { id, name },
            id: this.lastID
        });
    });
    stmt.finalize();
});

module.exports = router;

module.exports = router;
