class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  emitirSom() {
    console.log(`${this.nome} emitiu um som!`);
  }
}

class Cachorro extends Animal {
  latir() {
    console.log(`${this.name} latiu: auau`);
  }
}

const dog = new Cachorro("Rex");
dog.emitirSom();
dog.latir();
