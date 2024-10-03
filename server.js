const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',       // Change to your MySQL username
    password: 'AdityaK@024', // Change to your MySQL password
    database: 'ayush_db'  // Replace with your database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Create the users table if it doesn't exist
db.query(`
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        DOB DATE NOT NULL,
        gender ENUM('male', 'female', 'other') NOT NULL,
        password VARCHAR(255) NOT NULL
    )
`, (err, result) => {
    if (err) throw err;
    console.log("Users table created or already exists");
});

// Handle POST request for signup
app.post('/signup', (req, res) => {
    const { name, email, DOB, gender, password } = req.body;

    // SQL query to insert the user data
    const query = `INSERT INTO users (name, email, DOB, gender, password) VALUES (?, ?, ?, ?, ?)`;

    db.query(query, [name, email, DOB, gender, password], (err, result) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(400).json({ message: 'Email already registered!' });
            }
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.status(201).json({ message: 'Account created successfully!' });
    });
});

// Handle POST request for login
app.post('/login', (req, res) => {
    const { identifier, password } = req.body;

    // Fetch user from the database by email
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [identifier], (err, results) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });
        if (results.length === 0) return res.status(404).json({ message: 'User not found' });

        const user = results[0];

        // Check password (for simplicity, this assumes passwords are stored in plain text)
        if (password === user.password) {
            return res.status(200).json({ message: 'Login successful!', userId: user.id });
        } else {
            return res.status(401).json({ message: 'Invalid password' });
        }
    });
});

// Serve the signup form and other static files
app.use(express.static(__dirname));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
