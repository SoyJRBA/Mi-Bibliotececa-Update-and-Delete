const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const Valor = new Schema ({
    Nombre: String,
    Autor: String,
    Publicacion: String,
    Descripcion: String
});
module.exports = mongoose.model('Registros', Valor);