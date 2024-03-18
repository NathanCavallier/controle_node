const Mongoose = require('mongoose');


const lullabySchema = new Mongoose.Schema({
    songName: { type: String, required: true },
    artist: { type: String, required: true },
    songLink: { type: String, required: true },
    duration: { type: Number, required: true },
    createdDate: { type: Date, default: Date.now },
    modifiedDate: { type: Date, default: Date.now },
    imageLink: { type: String, required: true },

    isFavorite: { type: Boolean, default: false },
    isHistorique: { type: Boolean, default: false },
    isArchive: { type: Boolean, default: false },
    isStarted: { type: Boolean, default: false },
    isListened: { type: Boolean, default: false }
});

let Lullaby = Mongoose.model('Lullaby',lullabySchema);

module.exports = Lullaby;