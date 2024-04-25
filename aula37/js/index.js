const nome = ['Gabriel', 'Silva'];

const pessoa = {
    nome:'Gabriel',
    sobrenome: 'Silva'
};

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// }

// for (let i in nome) {
//     console.log(nome[i]);
// }

for (let i of nome) {
    console.log(i);
}

nome.forEach(function(valor, indice) {
    console.log(valor, indice, nome);
});