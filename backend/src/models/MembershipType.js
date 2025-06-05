const mongoose = require('mongoose');

const membershipTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    benefits: [{
        type: String
    }],
    duration: {
        type: Number, // Duración en meses
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('MembershipType', membershipTypeSchema); 