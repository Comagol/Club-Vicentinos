const Membership = require('../models/Membership');

// Función para obtener la información de membresía de un usuario
exports.getMembership = async (req, res) => {
  try {
    const membership = await Membership.findOne({ userId: req.params.userId });
    if (!membership) {
      return res.status(404).json({ error: 'Membresía no encontrada' });
    }
    res.status(200).json(membership);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función para actualizar la información de membresía
exports.updateMembership = async (req, res) => {
  try {
    const { membershipType, status } = req.body;
    const membership = await Membership.findOneAndUpdate(
      { userId: req.params.userId },
      { membershipType, status },
      { new: true }
    );
    if (!membership) {
      return res.status(404).json({ error: 'Membresía no encontrada' });
    }
    res.status(200).json(membership);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}; 