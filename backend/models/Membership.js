const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  membershipType: { type: String, required: true },
  status: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Membership', membershipSchema); 