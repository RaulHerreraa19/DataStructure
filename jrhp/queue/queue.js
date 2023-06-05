export class Queue {
  constructor() { 
    this.elementos = [];
  }

  add(elemento) {
    this.elementos.push(elemento);
  }

  remove() {
    return this.elementos.shift();
  }

  isEmpty() {
    return this.elementos.length === 0;
  }

  delete() {
    this.elementos.length = 0;
  }

  lenght() {
    return this.elementos.length;
  }
}
