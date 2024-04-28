const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Zoo = db.model('Zoo', {
    nev: String,
    cim: String,
    uzemelteto: String,
   
});

module.exports = Zoo;