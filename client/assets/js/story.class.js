// Class pour la création d'une histoire
export class Story {
  constructor(title, author, storyContent, id = null, imageLink, tags, audioLink, audioDuration, favorite = false) {
    this.imageLink = imageLink;
    this.tags = tags;
    this.id = id;
    this.title = title;
    this.author = author;
    this.storyContent = storyContent;
    this.date = date;
    this.audioLink = audioLink;
    this.audioDuration = audioDuration;
    this.favorite = favorite;
  }
  getId() {
    return this.id;
  }
  setId(id) {
    this.id = id;
  }
  getTitle() {
    return this.title;
  }
  getAuthor() {
    return this.author;
  }
  getContent() {
    return this.content;
  }
  setTitle(title) {
    this.title = title;
  }
  setAuthor(author) {
    this.author = author;
  }
  setContent(content) {
    this.content = content;
  }
  setImageLink(imageLink) {
    this.imageLink = imageLink;
  }
  getImageLink() {
    return this.imageLink;
  }
  setTags(tags) {
    this.tags = tags;
  }
  getTags() {
    return this.tags;
  }
  setAudioLink(audioLink) {
    this.audioLink = audioLink;
  }
  getAudioLink() {
    return this.audioLink;
  }
  setAudioDuration(audioDuration) {
    this.audioDuration = audioDuration;
  }
  getAudioDuration() {
    return this.audioDuration;
  }
  setFavorite(favorite) {
    this.favorite = favorite;
  }
  getFavorite() {
    return this.favorite;
  }
  toString() {
    return `${this.title} by ${this.author}: ${this.content}`;
  }
}