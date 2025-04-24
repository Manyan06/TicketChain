// backend/routes/events.js
const express = require('express');
const WebSocket = require('ws'); // Import WebSocket
const i18n = require('i18next'); // Import i18n

// Initialize i18n
i18n.init({
    resources: {
        en: {
            translation: {
                "welcome": "Welcome to the Event Ticketing Assistant",
                "event_added": "Event added",
                "feedback_submitted": "Feedback submitted successfully!",
                "error_fetching_recommendations": "Error fetching recommendations",
                "error_submitting_feedback": "Error submitting feedback",
                "error_fetching_analytics": "Error fetching analytics data",
                // Add more translations as needed
            }
        },
        es: {
            translation: {
                "welcome": "Bienvenido al Asistente de Entradas para Eventos",
                "event_added": "Evento agregado",
                "feedback_submitted": "¡Comentarios enviados con éxito!",
                "error_fetching_recommendations": "Error al obtener recomendaciones",
                "error_submitting_feedback": "Error al enviar comentarios",
                "error_fetching_analytics": "Error al obtener datos analíticos",
                // Add more translations as needed
            }
        }
    },
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
        escapeValue: false // React already does escaping
    }
});

const router = express.Router();

// Example route to get a list of events
router.get('/', (req, res) => {
    res.json({ message: i18n.t('welcome') });
});

// Add more routes as needed
// Example: Add a new event
router.post('/add', (req, res) => {
    // Logic to add a new event
    res.json({ message: i18n.t('event_added') });
});

// Recommendations Endpoint
router.post('/recommendations', async (req, res) => {
    const userId = req.body.userId;

    try {
        // Fetch user preferences from the database
        const preferences = await getUser Preferences(userId); // Ensure this function is defined
        // Use GROQ to generate recommendations based on preferences
        const recommendations = await generateRecommendations(preferences); // Ensure this function is defined
        res.send({ recommendations });
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        res.status(500).send({ error: i18n.t('error_fetching_recommendations') });
    }
});