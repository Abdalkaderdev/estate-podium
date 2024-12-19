const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const sqlite3 = require('sqlite3').verbose();

    const app = express();
    const port = 3000;

    app.use(cors());
    app.use(bodyParser.json());

    const db = new sqlite3.Database(':memory:');

    db.serialize(() => {
      db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, email TEXT, password TEXT)");
      db.run("CREATE TABLE properties (id INTEGER PRIMARY KEY, title TEXT, description TEXT, price TEXT, size TEXT, location TEXT, amenities TEXT, contact TEXT, image TEXT, owner_id INTEGER)");
      db.run("CREATE TABLE messages (id INTEGER PRIMARY KEY, sender_id INTEGER, receiver_id INTEGER, message TEXT, timestamp DATETIME DEFAULT CURRENT_TIMESTAMP)");
    });

    app.get('/', (req, res) => {
      res.send('Welcome to the Real Estate Backend API');
    });

    app.post('/register', (req, res) => {
      const { email, password } = req.body;
      const stmt = db.prepare("INSERT INTO users (email, password) VALUES (?, ?)");
      stmt.run(email, password, function(err) {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.json({ id: this.lastID });
      });
      stmt.finalize();
    });

    app.post('/login', (req, res) => {
      const { email, password } = req.body;
      db.get("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], (err, row) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        if (row) {
          res.json({ id: row.id, email: row.email });
        } else {
          res.status(401).json({ error: 'Invalid credentials' });
        }
      });
    });

    app.post('/properties', (req, res) => {
      const { title, description, price, size, location, amenities, contact, image, owner_id } = req.body;
      const stmt = db.prepare("INSERT INTO properties (title, description, price, size, location, amenities, contact, image, owner_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
      stmt.run(title, description, price, size, location, amenities, contact, image, owner_id, function(err) {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.json({ id: this.lastID });
      });
      stmt.finalize();
    });

    app.get('/properties', (req, res) => {
      db.all("SELECT * FROM properties", [], (err, rows) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.json(rows);
      });
    });

    app.post('/messages', (req, res) => {
      const { sender_id, receiver_id, message } = req.body;
      const stmt = db.prepare("INSERT INTO messages (sender_id, receiver_id, message) VALUES (?, ?, ?)");
      stmt.run(sender_id, receiver_id, message, function(err) {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.json({ id: this.lastID });
      });
      stmt.finalize();
    });

    app.get('/messages', (req, res) => {
      const { sender_id, receiver_id } = req.query;
      db.all("SELECT * FROM messages WHERE (sender_id = ? AND receiver_id = ?) OR (sender_id = ? AND receiver_id = ?) ORDER BY timestamp ASC", [sender_id, receiver_id, receiver_id, sender_id], (err, rows) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.json(rows);
      });
    });

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
