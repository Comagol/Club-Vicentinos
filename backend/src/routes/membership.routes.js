const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');
const MembershipType = require('../models/MembershipType');

// Get membership types
router.get('/types', async (req, res) => {
    try {
        const membershipTypes = await MembershipType.find();
        res.json(membershipTypes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching membership types' });
    }
});

// Get user's membership status
router.get('/status', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
            .select('membershipStatus membershipType');
        res.json({
            status: user.membershipStatus,
            type: user.membershipType
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching membership status' });
    }
});

// Update user's membership (admin only)
router.put('/update/:userId', auth, async (req, res) => {
    try {
        const { membershipStatus, membershipType } = req.body;
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            { membershipStatus, membershipType },
            { new: true }
        );
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error updating membership' });
    }
});

module.exports = router; 