const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

// Get user profile
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
            .select('-password');
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching profile' });
    }
});

// Update user profile
router.put('/', auth, async (req, res) => {
    try {
        const { name, email, phone, address } = req.body;
        const user = await User.findByIdAndUpdate(
            req.user._id,
            { name, email, phone, address },
            { new: true }
        ).select('-password');
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error updating profile' });
    }
});

// Update profile image
router.put('/image', auth, async (req, res) => {
    try {
        const { imageUrl } = req.body;
        const user = await User.findByIdAndUpdate(
            req.user._id,
            { profileImage: imageUrl },
            { new: true }
        ).select('-password');
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error updating profile image' });
    }
});

module.exports = router; 