const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://dbUser:wxhrId6tjDnpcibO@cluster0.fbkwask.mongodb.net/annotations?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

module.exports = connection;
