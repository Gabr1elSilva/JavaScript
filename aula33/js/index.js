const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Silva',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero:320
    }
};

// const { endereco: { rua, numero }, endereco } = pessoa;
// console.log(rua, numero, endereco);

const { nome, ...resto} = pessoa;
console.log(nome, resto);