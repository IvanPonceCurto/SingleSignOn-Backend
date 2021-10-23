var mongoose = require('mongoose');

var SuscripcionesSchema = new mongoose.Schema({
    email: String,
    tenant: String,
    name: String,
    last_name: String,
    claims: [String]
})

var Suscripciones = mongoose.model('suscripciones', SuscripcionesSchema, 'suscripciones');

module.exports = Suscripciones;