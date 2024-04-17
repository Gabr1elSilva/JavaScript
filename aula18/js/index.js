// const pessoa1 = {
//     nome: 'Gabriel',
//     sobrenome: 'Silva',
//     idade: 21
// };

// const pessoa2 = {
//     nome: 'Matheus',
//     sobrenome: 'Guerson',
//     idade: 21
// };

// console.log(pessoa1.nome);
// console.log(pessoa2.nome);

// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome,
//         sobrenome,
//         idade
//     };
// }

// const pessoa1 = criaPessoa('Gabriel', 'Silva', 21);
// console.log(pessoa1.nome);
// const pessoa2 = criaPessoa('Matheus', 'Guerson', 23);
// console.log(pessoa2.nome);
// const pessoa3 = criaPessoa('André', 'Espejo', 24);
// console.log(pessoa3.nome);
// const pessoa4 = criaPessoa('Lucas', 'Silva', 22);
// console.log(pessoa4.nome);
// const pessoa5 = criaPessoa('PH', 'Silva', 19);
// console.log(pessoa5.nome);


const pessoa1 = {
    nome:'Gabriel',
    sobrenome: 'Silva',
    idade: 21,

    fala() {
        console.log(`Minha idade atual é ${this.idade}`);
    },

    incrimentaidade() {
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrimentaidade();
pessoa1.fala();
pessoa1.incrimentaidade();
pessoa1.fala();
pessoa1.incrimentaidade();
pessoa1.fala();
pessoa1.incrimentaidade();
pessoa1.fala();