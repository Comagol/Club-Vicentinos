const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const News = require('../models/News');

// Get all news
router.get('/', async (req, res) => {
    try {
        const news = await News.find().sort({ createdAt: -1 });
        res.json(news);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching news' });
    }
});

// Get single news
router.get('/:id', async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        if (!news) {
            return res.status(404).json({ message: 'News not found' });
        }
        res.json(news);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching news' });
    }
});

// Create news (admin only)
router.post('/', auth, async (req, res) => {
    try {
        const { title, content, image } = req.body;
        const news = new News({
            title,
            content,
            image,
            author: req.user._id
        });
        await news.save();
        res.status(201).json(news);
    } catch (error) {
        res.status(500).json({ message: 'Error creating news' });
    }
});

// Update news (admin only)
router.put('/:id', auth, async (req, res) => {
    try {
        const { title, content, image } = req.body;
        const news = await News.findByIdAndUpdate(
            req.params.id,
            { title, content, image },
            { new: true }
        );
        if (!news) {
            return res.status(404).json({ message: 'News not found' });
        }
        res.json(news);
    } catch (error) {
        res.status(500).json({ message: 'Error updating news' });
    }
});

// Delete news (admin only)
router.delete('/:id', auth, async (req, res) => {
    try {
        const news = await News.findByIdAndDelete(req.params.id);
        if (!news) {
            return res.status(404).json({ message: 'News not found' });
        }
        res.json({ message: 'News deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting news' });
    }
});

module.exports = router; 