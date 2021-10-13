var mongoose = require('mongoose');

var WebSchema = new mongoose.Schema({
    email: String,
    tenant: String,
    name: String,
    last_name: String,
    admin: Boolean,
    claims: [String]
})

var Web = mongoose.model('web', WebSchema, 'web');

module.exports = Web;