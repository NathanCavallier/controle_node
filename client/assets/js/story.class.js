// Class pour la création d'une histoire
export class Story {
  constructor(title, author, numberOfChapters = 1, currentChapter = 1, storyContent = [], 
    currentChapter = 1, id = null, imageLink, date, storyProgression = [], isFavorite = false, 
    isBookmark = false, isHistorique = false, isArchive = false, isStarted = false, isFinished = false) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.numberOfChapters = numberOfChapters;
    this.currentChapter = currentChapter;
    this.storyContent = storyContent;
    this.createdDate = date;
    this.imageLink = imageLink;

    this.isFavorite = isFavorite;
    this.isBookmark = isBookmark;
    this.isHistorique = isHistorique;
    this.isArchive = isArchive;
    this.isStarted = isStarted;
    this.isFinished = isFinished;
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
  getNumberOfChapters() {
    return this.numberOfChapters;
  }
  getCurrentChapter() {
    return this.currentChapter;
  }
  getStoryContent() {
    return this.storyContent;
  }
  setCurrentChapter(currentChapter) {
    this.currentChapter = currentChapter;
  }
  setStoryContent(storyContent) {
    this.storyContent = storyContent;
  }
  setNumberOfChapters(numberOfChapters) {
    this.numberOfChapters = numberOfChapters;
  }
  setTitle(title) {
    this.title = title;
  }
  setAuthor(author) {
    this.author = author;
  }
  setImageLink(imageLink) {
    this.imageLink = imageLink;
  }
  getImageLink() {
    return this.imageLink;
  }
  setCreatedDate(date) {
    this.createdDate = date;
  }
  getCreatedDate() {
    return this.createdDate;
  }
  
  setIsFavorite(isFavorite) {
    this.isFavorite = isFavorite;
  }
  getIsFavorite() {
    return this.isFavorite;
  }
  setIsBookmark(isBookmark) {
    this.isBookmark = isBookmark;
  }
  getIsBookmark() {
    return this.isBookmark;
  }
  setIsHistorique(isHistorique) {
    this.isHistorique = isHistorique;
  }
  getIsHistorique() {
    return this.isHistorique;
  }
  setIsArchive(isArchive) {
    this.isArchive = isArchive;
  }
  getIsArchive() {
    return this.isArchive;
  }
  setIsStarted(isStarted) {
    this.isStarted = isStarted;
  }
  getIsStarted() {
    return this.isStarted;
  }
  setIsFinished(isFinished) {
    this.isFinished = isFinished;
  }
  getIsFinished() {
    return this.isFinished;
  }
  toString() {
    return `${this.title} by ${this.author}: ${this.content}`;
  }
}
