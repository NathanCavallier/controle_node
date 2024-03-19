// Class pour la création d'une histoire
export class Story {
  constructor(title, author, numberOfChapters = 1, currentChapter = 1, storyContent = [], linkToStoryreaderPage, linkToChapter,
    currentChapter = 1, id = null, imageLink, releaseYear, storyDescription, storyGenre, listOfChapters, storyTags = [], isFavorite = false,
    isBookmark = false, isHistorique = false, isArchive = false, isStarted = false, isFinished = false) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.numberOfChapters = numberOfChapters;
    this.currentChapter = currentChapter;
    this.storyContent = storyContent;
    this.storyDescription = storyDescription;
    this.storyGenre = storyGenre;
    this.releaseYear = releaseYear;
    this.imageLink = imageLink;
    this.storyTags = storyTags;
    this.listOfChapters = listOfChapters;
    this.linkToStoryreaderPage = linkToStoryreaderPage;
    this.linkToChapter = linkToChapter;

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
  getStoryDescription() {
    return this.storyDescription;
  }
  getStoryGenre() {
    return this.storyGenre;
  }
  getListOfChapters() {
    return this.listOfChapters;
  }
  setListOfChapters(listOfChapters) {
    this.listOfChapters = listOfChapters;
  }
  getStoryTags() {
    return this.storyTags;
  }
  getLinkToStoryreaderPage() {
    return this.linkToStoryreaderPage;
  }
  setLinkToStoryreaderPage(linkToStoryreaderPage) {
    this.linkToStoryreaderPage = linkToStoryreaderPage;
  }
  setLinkToChapter(linkToChapter) {
    this.linkToChapter = linkToChapter;
  }
  setStoryGenre(storyGenre) {
    this.storyGenre = storyGenre;
  }
  setStoryTags(storyTags) {
    this.storyTags = storyTags;
  }
  setStoryDescription(storyDescription) {
    this.storyDescription = storyDescription;
  }
  getReleaseYear() {
    return this.releaseYear;
  }
  setReleaseYear(releaseYear) {
    this.releaseYear = releaseYear;
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
    this.releaseYear = date;
  }
  getCreatedDate() {
    return this.releaseYear;
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
