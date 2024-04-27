// function soma(a, b) {
//     return a + b;
// }

// function soma2(a, b) {
//     console.log(a + b);
// }

// soma2(5, 2);

// function criaPessoa(nome, sobrenome) {
//     return {
//         nome:nome,
//         sobrenome: sobrenome
//     };
// }

// const p1 = criaPessoa('Gabriel', 'Silva');
// const p2 = {
//     nome: 'Lucas',
//     sobrenome: 'Pgrada'
// };

// console.log(p1);
// console.log(p2);

// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco + ' ' + resto;
//     }

//     return falaResto;
// }

// const fala = falaFrase('Olá');
// const resto = fala('Mundo!');

// console.log(resto);

// function duplica(n) {
//     return n * 2;
// }

// function triplica(n) {
//     return n * 3;
// }

// function quadriplica(n) {
//     return n * 4;
// }

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(10));
console.log(triplica(5));
console.log(quadriplica(8));
