const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to my API' });
});
router.get("/api", (req,res) =>{
    res.json({"users":["userOne", "userTwo", "userThree"]})
})

router.use('/users', require('./users'));
router.use('/products', require('./products'));

module.exports = router;
