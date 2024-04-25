// const frutas = ['Uva', 'Banana', 'Pera'];

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Silva',
    idade: 21
}

console.log(pessoa.nome);
console.log(pessoa['nome']);

for (let i in pessoa) {
    console.log(i, pessoa[i]);
}