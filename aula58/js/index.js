function Pessoa(nome, sobrenome) {
    const ID = 123456;
    const metodoInterno = function() {
        console.log(`Isso é ${this.sobrenome}!`)
    };

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(`${this.nome}: sou um método!`)
    };
}

const p1 = new Pessoa ('Gabriel', 'Silva');
const p2 = new Pessoa ('Lucas', 'PGui');

console.log(p1.nome);
console.log(p2.nome);
p2.metodo();