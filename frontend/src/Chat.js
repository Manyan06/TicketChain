import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
    const [message, setMessage] = useState('');
    const [responses, setResponses] = useState([]);

    const handleSendMessage = async () => {
        if (!message) return;

        try {
            const response = await axios.post('http://localhost:5000/api/chat', { message });
            setResponses([...responses, { user: message, bot: response.data.reply }]);
            setMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const handleVoiceInput = () => {
        const recognition = new window.SpeechRecognition();
        recognition.onresult = (event) => {
            const voiceMessage = event.results[0][0].transcript;
            setMessage(voiceMessage);
            handleSendMessage();
        };
        recognition.start();
    };

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post('http://localhost:5000/api/analyze-image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setResponses([...responses, { user: 'Image uploaded', bot: response.data.result }]);
        } catch (error) {
            console.error('Error analyzing image:', error);
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-window">
                {responses.map((resp, index) => (
                    <div key={index}>
                        <p><strong>You:</strong> {resp.user}</p>
                        <p><strong>Bot:</strong> {resp.bot}</p>
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
            <button onClick={handleVoiceInput}>🎤 Speak</button>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
    );
};

export default Chat;