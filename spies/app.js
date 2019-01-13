const db = require('./db');

module.exports.handleSignup = (email, password) => {

    // Check if the email exists
    db.saveUser({email, password});
    // Send welcome email

};