import { Lullaby } from '../classes/lullaby.class'


export class LullabyService {
  constructor() {
    this.lullabies = [];
  }

  addLullaby(lullaby) {
    this.lullabies.push(lullaby);
  }

  getLullabyById(id) {
    return this.lullabies.find(lullaby => lullaby.getId() === id);
  }

  getLullabies() {
    return this.lullabies;
  }

  removeLullabyById(id) {
    this.lullabies = this.lullabies.filter(lullaby => lullaby.getId() !== id);
  }
}