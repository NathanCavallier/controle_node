const Mongoose = require('mongoose');

// Schéma de la collection story
const storySchema = new Mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    numberOfChapters: { type: Number, required: true },
    currentChapter: { type: Number, required: true },
    storyContent: { type: Array<String>(''), required: true },
    storyDescription : { type: String, required: true },
    storyGenre: { type: String, required: true },
    storyTags: { type: Array<String>(''), required: true },
    releaseYear: { type: Date, default: Date.now },
    imageLink: { type: String, required: true },

    isFavorite: { type: Boolean, default: false },
    isBookmark: { type: Boolean, default: false },
    isHistorique: { type: Boolean, default: false },
    isArchive: { type: Boolean, default: false },
    isStarted: { type: Boolean, default: false },
    isFinished: { type: Boolean, default: false },
});

let Story = Mongoose.model('Story', storySchema);

module.exports = Story;