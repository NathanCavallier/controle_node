import { Mongoose } from "mongoose";

// Schéma de la collection story
const storySchema = new Mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    numberOfChapters: { type: Number, required: true },
    currentChapter: { type: Number, required: true },
    storyContent: { type: Array<String>(''), required: true },
    createdDate: { type: Date, default: Date.now },
});

let Story = Mongoose.model('Story', storySchema);

export default Story;