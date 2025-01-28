const Usuario = require('../models/Usuario');

// Crear un nuevo usuario
const crearUsuario = async (req, res) => {
    try {
        console.log('Datos recibidos:', req.body); // Muestra los datos enviados al backend
        const nuevoUsuario = new Usuario(req.body);
        await nuevoUsuario.save();
        res.status(201).json({ mensaje: 'Usuario creado exitosamente', usuario: nuevoUsuario });
    } catch (error) {
        console.error('Error:', error.message); // Muestra el error en el servidor
        res.status(400).json({ mensaje: 'Error creando usuario', error: error.message });
    }
};


// Obtener todos los usuarios
const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error obteniendo usuarios', error: error.message });
    }
};

module.exports = { crearUsuario, obtenerUsuarios };
