const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const resultado = [];

// for (let i of numeros) {
//     if (i > 10) resultado.unshift(i);
// }

// console.log(resultado);

// const resultado = numeros.filter(valor => valor > 10);
// console.log(resultado);


const pessoas = [
    {nome: 'Gabriel', idade: 21},
    {nome: 'Lucas', idade: 22},
    {nome: 'Estevao', idade: 21},
    {nome: 'Luiz', idade: 44},
    {nome: 'Ana', idade: 67}
];
const pessoasNome = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasIdade = pessoas.filter(obj => obj.idade > 50);
// const pessoasFinal = pessoas.filter(obj => obj.nome[obj.nome.length - 1] === 'a');

const pessoaFinal = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(pessoasNome);
console.log(pessoasIdade);
console.log(pessoaFinal);