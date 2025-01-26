require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

//Con esto inicializamos express
const app = express();
const PORT = process.env.PORT || 3000;
const usuarioRoutes = require('./routes/usuarioRoutes');
app.use('/api', usuarioRoutes);


//Middlewares de la app
app.use(express.json());

//Rutas básicas
app.get('/', (req, res) => {
    res.send('¡Bienvenido a INE virtual!');
});

//Conexión con mi bd Mongo
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch((err) => console.error('Error conectando a MongoDB:', err));


//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost;${PORT}`)
})

//Conex