// backend/routes/events.js
const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
    res.json({ message: 'List of events' });
});

// Add more routes as needed
// router.post('/add', (req, res) => { ... });

module.exports = router; // Ensure you export the router