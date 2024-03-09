// Class pour la création d'une berceuse à partir de l'API de Soundcloud
export class Lullaby {
  constructor(songName, artist, id, duration, imageLink, createdDate, modifiedDate, isFavorite = false, isBookmark = false, isHistorique = false, isArchive = false, isStarted = false, isListened = false) {
    this.id = id;
    this.songName = songName;
    this.artist = artist;
    this.songLink = `https://api.soundcloud.com/tracks/${id}`;
    this.duration = duration;
    this.createdDate = createdDate;
    this.modifiedDate = modifiedDate;
    this.imageLink = imageLink;

    this.isFavorite = isFavorite;
    this.isHistorique = isHistorique;
    this.isArchive = isArchive;
    this.isStarted = isStarted;
    this.isListened = isListened;
  }
  getId() {
    return this.id;
  }
  setId(id) {
    this.id = id;
  }
  getTitle() {
    return this.songName;
  }
  getArtist() {
    return this.artist;
  }
  getSongLink() {
    return this.songLink;
  }
  getIsListened() {
    return this.isListened;
  }
  setIsListened(isListened) {
    this.isListened = isListened;
  }
  getDuration() {
    return this.duration;
  }
  getImageLink() {
    return this.imageLink;
  }
  getCreatedDate() {
    return this.createdDate;
  }
  getModifiedDate() {
    return this.modifiedDate;
  }
  setModifiedDate(date) {
    this.modifiedDate = date;
  }
  getIsFavorite() {
    return this.isFavorite;
  }
  getIsHistorique() {
    return this.isHistorique;
  }
  getIsArchive() {
    return this.isArchive;
  }
  getIsStarted() {
    return this.isStarted;
  }
  setIsFavorite(isFavorite) {
    this.isFavorite = isFavorite;
  }
  setIsHistorique(isHistorique) {
    this.isHistorique = isHistorique;
  }
  setIsArchive(isArchive) {
    this.isArchive = isArchive;
  }
  setIsStarted(isStarted) {
    this.isStarted = isStarted;
  }
  setTitle(title) {
    this.songName = title;
  }
  setArtist(artist) {
    this.artist = artist;
  }
  setDuration(duration) {
    this.duration = duration;
  }
  setImageLink(imageLink) {
    this.imageLink = imageLink;
  }
  setCreatedDate(date) {
    this.createdDate = date;
  }
}