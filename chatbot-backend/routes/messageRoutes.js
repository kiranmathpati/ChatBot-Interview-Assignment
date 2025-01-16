const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Send a message
router.post('/send', async (req, res) => {
    try {
        const { sender, recipient, content } = req.body;

        const newMessage = new Message({ sender, recipient, content });
        await newMessage.save();

        res.status(201).json({ message: 'Message sent successfully', data: newMessage });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send message' });
    }
});

// Fetch messages between two users
router.get('/fetch/:user1/:user2', async (req, res) => {
    try {
        const { user1, user2 } = req.params;

        const messages = await Message.find({
            $or: [
                { sender: user1, recipient: user2 },
                { sender: user2, recipient: user1 }
            ]
        }).sort({ timestamp: 1 });

        res.status(200).json({ data: messages });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch messages' });
    }
});

// Fetch messages based on user query
router.get('/query/:keyword', async (req, res) => {
    try {
        const { keyword } = req.params;

        const messages = await Message.find({
            $or: [
                { sender: new RegExp(keyword, 'i') },
                { recipient: new RegExp(keyword, 'i') },
                { content: new RegExp(keyword, 'i') }
            ]
        }).sort({ timestamp: 1 });

        res.status(200).json({ data: messages });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch messages based on query' });
    }
});

module.exports = router;
