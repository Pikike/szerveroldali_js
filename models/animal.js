const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Animal = db.model('Animal', {
    allatnev: String,
    kor: Number,
    fajta: String,
    _lakik: {
        type: Schema.Types.ObjectId,
        ref: 'Zoo'
    }
});

module.exports = Animal;