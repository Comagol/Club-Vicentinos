const News = require('../models/News');

// Función para obtener todas las noticias
exports.getNews = async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json(news);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Función para crear una nueva noticia
exports.createNews = async (req, res) => {
  try {
    const { title, date, image } = req.body;
    const news = new News({ title, date, image });
    await news.save();
    res.status(201).json({ message: 'Noticia creada exitosamente', news });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}; 