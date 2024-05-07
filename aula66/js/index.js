const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const nDobro = numeros.map(valor => valor * 2);
console.log(nDobro);

const pessoas = [
    { nome: 'Gabriel Silva', idade: 21 },
    { nome: 'Lucas PGui', idade: 23 },
    { nome: 'Paulo Henrique', idade: 55 },
    { nome: 'Estevao Mathias', idade: 19 },
    { nome: 'Matheus Gerson', idade: 32 },
    { nome: 'André Espejo', idade: 47 }
];

const pessoaNome = pessoas.map(obj => obj.nome);
const pessoaIdade = pessoas.map(obj => ({ idade: obj.idade }));
const pessoaID = pessoas.map((obj, indice) => {
    const newObj = {...obj}
    newObj.id = (indice + 1) * 1000;
    return newObj;
});

console.log(pessoas);
console.log(pessoaNome);
console.log(pessoaIdade);
console.log(pessoaID);