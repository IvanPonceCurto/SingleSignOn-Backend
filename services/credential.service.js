const Credentials = require('../models/Credentials.model');
var bcrypt = require('bcryptjs');
const { SALT } = require('../constants/constants');

class CredentialService {
    constructor() {

    }

    async isValidCredentials(email, password) {
        const hashedPassword = await bcrypt.hash(password, SALT);
        const user = await Credentials.find({ email });
        if (user[0]) {
            if (hashedPassword === user[0].password) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

module.exports = CredentialService;