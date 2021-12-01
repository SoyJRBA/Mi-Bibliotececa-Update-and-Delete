const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const Valor = new Schema ({
    Nombre: String,
    Correo: String,
    Contraseña: String
});
module.exports = mongoose.model('Registros', Valor);