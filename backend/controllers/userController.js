const User = require('../models/User');

// Función para obtener el perfil del usuario
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función para actualizar el perfil del usuario
exports.updateProfile = async (req, res) => {
  try {
    const { name, email, phone, avatar } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, phone, avatar },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}; 