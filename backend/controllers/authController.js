const User = require('../models/User');

// Función para registrar un nuevo usuario
exports.register = async (req, res) => {
  try {
    const { name, email, password, memberId, membershipType, phone, avatar } = req.body;
    const user = new User({ name, email, password, memberId, membershipType, phone, avatar });
    await user.save();
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función para login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    res.status(200).json({ message: 'Login exitoso', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función para logout (simplemente devuelve un mensaje)
exports.logout = (req, res) => {
  res.status(200).json({ message: 'Logout exitoso' });
}; 