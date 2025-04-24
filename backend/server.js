const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios'); // For making API requests
const multer = require('multer');
const { router: eventsRouter, wss } = require('./routes/events'); // Import the events router and WebSocket server
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Set up CORS and body parser
app.use(cors());
app.use(bodyParser.json());

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' }); // Set the destination for uploaded files

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define routes
app.get('/', (req, res) => {
    res.send('Event Ticketing Assistant API');
});

// User Profile Endpoint
app.get('/api/user/profile', (req, res) => {
    // Fetch user profile from the database
    // Ensure the user is authenticated
    const userProfile = { name: 'John Doe', email: 'john@example.com' }; // Example user profile
    res.send(userProfile);
});

// GROQ Chat Endpoint
app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    try {
        const response = await axios.post('https://api.groq.com/v1/chat/completions', {
            messages: [{ role: 'user', content: message }],
            model: 'llama3-8b-8192', // Use the appropriate model
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        const reply = response.data.choices[0]?.message?.content || 'No response';
        res.send({ reply });
    } catch (error) {
        console.error('Error fetching chat completion:', error);
        res.status(500).send({ error: 'Error processing request' });
    }
});

// Image Analysis Endpoint
app.post('/api/analyze-image', upload.single('image'), async (req, res) => {
    const imagePath = req.file.path;

    // Here you would implement your image analysis logic
    const analysisResult = 'Image analysis result here'; // Replace with actual analysis

    res.send({ result: analysisResult });
});

// Use the events router
app.use('/api/events', eventsRouter); // Mount the events router

// Handle WebSocket upgrade requests
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Upgrade HTTP server to handle WebSocket connections
server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
    });
});