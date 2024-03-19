// Class pour la création d'une histoire
export class Story {

  // Attributs de la classe Story
  title;
  author;
  numberOfChapters;
  currentChapter;
  storyContent;
  storyDescription;
  storyGenre;
  releaseYear;
  imageLink;
  storyTags;
  listOfChapters;
  linkToStoryreaderPage;
  linkToChapter;
  isFavorite;
  isBookmark;
  isHistorique;
  isArchive;
  isStarted;
  isFinished;
  id;

  // Constructeur de la classe Story
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

  // Méthodes de la classe Story
  get id() {
    return this.id;
  }

  set id(id) {
    this.id = id;
  }

  get title() {
    return this.title;
  }

  set title(title) {
    this.title = title;
  }

  get author() {
    return this.author;
  }

  set author(author) {
    this.author = author;
  }

  get numberOfChapters() {
    return this.numberOfChapters;
  }

  set numberOfChapters(numberOfChapters) {
    this.numberOfChapters = numberOfChapters;
  }

  get currentChapter() {
    return this.currentChapter;
  }

  set currentChapter(currentChapter) {
    this.currentChapter = currentChapter;
  }

  get storyContent() {
    return this.storyContent;
  }

  set storyContent(storyContent) {
    this.storyContent = storyContent;
  }

  get storyDescription() {
    return this.storyDescription;
  }

  set storyDescription(storyDescription) {
    this.storyDescription = storyDescription;
  }

  get storyGenre() {
    return this.storyGenre;
  }

  set storyGenre(storyGenre) {
    this.storyGenre = storyGenre;
  }

  get releaseYear() {
    return this.releaseYear;
  }

  set releaseYear(releaseYear) {
    this.releaseYear = releaseYear;
  }

  get imageLink() {
    return this.imageLink;
  }

  set imageLink(imageLink) {
    this.imageLink = imageLink;
  }

  get storyTags() {
    return this.storyTags;
  }

  set storyTags(storyTags) {
    this.storyTags = storyTags;
  }

  get listOfChapters() {
    return this.listOfChapters;
  }

  set listOfChapters(listOfChapters) {
    this.listOfChapters = listOfChapters;
  }

  get linkToStoryreaderPage() {
    return this.linkToStoryreaderPage;
  }

  set linkToStoryreaderPage(linkToStoryreaderPage) {
    this.linkToStoryreaderPage = linkToStoryreaderPage;
  }

  get linkToChapter() {
    return this.linkToChapter;
  }

  set linkToChapter(linkToChapter) {
    this.linkToChapter = linkToChapter;
  }

  get isFavorite() {
    return this.isFavorite;
  }

  set isFavorite(isFavorite) {
    this.isFavorite = isFavorite;
  }

  get isBookmark() {
    return this.isBookmark;
  }

  set isBookmark(isBookmark) {
    this.isBookmark = isBookmark;
  }

  get isHistorique() {
    return this.isHistorique;
  }

  set isHistorique(isHistorique) {
    this.isHistorique = isHistorique;
  }

  get isArchive() {
    return this.isArchive;
  }

  set isArchive(isArchive) {
    this.isArchive = isArchive;
  }

  get isStarted() {
    return this.isStarted;
  }

  set isStarted(isStarted) {
    this.isStarted = isStarted;
  }

  get isFinished() {
    return this.isFinished;
  }

  set isFinished(isFinished) {
    this.isFinished = isFinished;
  }
}
