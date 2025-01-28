require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Inicializa Express
const app = express();
const PORT = process.env.PORT || 3000;
const usuarioRoutes = require('./routes/usuarioRoutes');

// Middlewares de la app (deben ir antes de las rutas)
app.use(cors()); // Habilitar CORS
app.use(express.json()); // Este middleware permite leer cuerpos JSON

// Rutas
app.use('/api', usuarioRoutes);

// Ruta básica
app.get('/', (req, res) => {
    res.send('¡Bienvenido a INE virtual!');
});

// Conexión con la base de datos MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Conectado a MongoDB en:', process.env.MONGO_URI);
    })
    .catch((err) => console.error('Error conectando a MongoDB:', err));


// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
