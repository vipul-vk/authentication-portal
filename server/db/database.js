const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run("CREATE TABLE users (id INT, name TEXT)");
    db.run("CREATE TABLE products (id INT, name TEXT)");

    const stmt = db.prepare("INSERT INTO users VALUES (?, ?)");
    stmt.run(1, "John Doe");
    stmt.run(2, "Jane Doe");
    stmt.finalize();

    const stmt2 = db.prepare("INSERT INTO products VALUES (?, ?)");
    stmt2.run(1, "Product A");
    stmt2.run(2, "Product B");
    stmt2.finalize();
});

module.exports = db;
