const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ZNEO25', { useNewUrlParser: true });

module.exports = mongoose;