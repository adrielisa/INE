const mongoose = require('mongoose');

const INESchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellidoP: { type: String, required: true },
    apellidoM: { type: String, required: true },
    sexo: { type: String, required: true },
    domicilio: { type: String, required: true },
    claveLector: { type: String, required: true },
    claveRegistro: { type: String, required: true },
    vigencia: { type: String, required: true },
    fechaNacimiento: { type: String, required: true },
    seccion: { type: String, required: true },
    curp: { type: String, required: true },
});

const UsuarioSchema = new mongoose.Schema({
    correo: { type: String, required: true, unique: true },
    contraseña: { type: String, required: true },
    INE: { type: INESchema, required: true },
});

module.exports = mongoose.model('Usuario', UsuarioSchema);


module.exports = mongoose.model('Usuario', UsuarioSchema);
