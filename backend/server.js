const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define routes
app.get('/', (req, res) => {
    res.send('Event Ticketing Assistant API');
});

// Integrate the events routes
const eventRoutes = require('./routes/events'); // Import the events routes
console.log(eventRoutes); // Check if the router is imported correctly
app.use('/api/events', eventRoutes); // Use the events routes

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});