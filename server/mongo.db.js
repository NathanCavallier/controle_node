import app from './config/express';
import mongoose from 'mongoose';

const uri = 'mongodb+srv://Nathan@admin:mtS9FNYHPvDnSYo8@nathan-hosanna-cluster0.mjqouc7.mongodb.net/?retryWrites=true&w=majority&appName=Nathan-Hosanna-Cluster0';

let port = 3000;
let promise = mongoose.connect(uri);

promise.then(function(db) {
    console.log('DB Connected');
    app.listen(port, function() {
        console.log(`DB listenning on port ${port}`);
    });
});
