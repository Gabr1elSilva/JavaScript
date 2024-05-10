function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'OG: ' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('Gabriel', 'Silva');
const pessoa2 = new Pessoa('Lucas', 'PGui');
const data = new Date();

console.dir(pessoa1);
console.dir(data);