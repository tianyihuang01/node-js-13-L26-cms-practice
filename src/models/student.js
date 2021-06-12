const { Schema, model } = require('mongoose');

const schema = new Schema({
    firstName: {
        type: String,
        require: true,
        trim: true,
    },
    lastName: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
    }
});

module.exports = model('Student', schema);