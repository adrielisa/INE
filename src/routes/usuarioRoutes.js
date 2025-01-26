const express = require('express');
const { crearUsuario, obtenerUsuarios } = require('../controllers/usuarioController');
const router = express.Router();

router.post('/usuarios', crearUsuario); // Ruta para crear un usuario
router.get('/usuarios', obtenerUsuarios); // Ruta para obtener todos los usuarios

module.exports = router;
