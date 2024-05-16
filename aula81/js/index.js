class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }   

    falar() {
        console.log(`${this.nome} está falando.`);
    }

    comer() {
        console.log(`${this.nome} está comendo.`);
    }

    beber() {
        console.log(`${this.nome} está bebendo.`);
    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`);
};

const p1 = new Pessoa('Gabriel', 'Silva');
// const p2 = new Pessoa('Vinicius', 'Silva');
// const p3 = new Pessoa('Lucas', 'Silva');
// const p4 = new Pessoa('Paulo', 'Silva');
// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p4);