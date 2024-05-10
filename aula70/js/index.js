// const pessoa = {
//     nome: 'Gabriel',
//     sobrenome: 'Silva'
// };
// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);
// const chave = 'nome';
// console.log(pessoa[chave]);
// console.log(pessoa['sobrenome']);

// const pessoa1 = new Object();
// pessoa1.nome = 'Gabriel';
// pessoa1.sobrenome = 'Silva';
// pessoa1.idade = 21;

// const pessoa2 = {
//     nome: 'Gabriel',
//     sobrenome: 'Silva'
// }

// delete pessoa1.nome;

// console.log(pessoa1.sobrenome);
// console.log(pessoa2.nome);
// console.log(pessoa2.sobrenome);

// pessoa1.falarNome = function() {
//     return(`${this.nome} está falando seu nome.`);
// };
// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };

// // console.log(pessoa1.getDataNascimento());
// for (let chave in pessoa1){
//     console.log(pessoa1[chave]);
// }

// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`
//         }
//     }
// }

// const p1 = criaPessoa('Gabriel', 'Silva');
// console.log(p1.nomeCompleto());

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

const p1 = new Pessoa('Gabriel', 'Silva');
p1.nome = 'Outro nome';
p2.sobrenome = 'Outro sobrenome';
const p2 = new Pessoa('Lucas', 'PGui');
console.log(p1, p2);