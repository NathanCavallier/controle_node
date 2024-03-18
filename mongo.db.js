const app = require('./server/config/express');
const mongoose = require('mongoose');

const uri = 'mongodb+srv://sikara:test@rpi2023.fvzrqh3.mongodb.net/?retryWrites=true&w=majority&appName=RPI2023';

let port = 3000;
let promise = mongoose.connect(uri);

promise.then(function(db) {
    console.log('DB Connected');
    app.listen(port, function() {
        console.log(`DB listenning on port ${port}`);
    });
});


module.exports = app;