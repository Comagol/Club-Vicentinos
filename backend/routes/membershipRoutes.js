const express = require('express');
const router = express.Router();
const membershipController = require('../controllers/membershipController');

router.get('/:userId', membershipController.getMembership);
router.put('/:userId', membershipController.updateMembership);

module.exports = router; 