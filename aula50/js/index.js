// function funcao() {
//     let total = 0;

//     for (let argumento of arguments) {
//         total += argumento;
//     }

//     console.log(total);
// }
// funcao(1, 2, 3, 4, 5, 6, 7, 8, 9);

// function funcao(a, b, c, d, e, f) {
//     console.log(a, b, c, d, e, f);
// }
// funcao(1, 2, 3);

// function funcao(a, b = 2, c = 4) {
//     // b = b || 0;
//     console.log(a + b + c);
// }
// funcao(2, undefined, 20);

// function funcao({ nome, sobrenome, idade }) {
//     console.log(nome, sobrenome, idade);
// }

// funcao({ nome: 'Gabriel', sobrenome: 'Silva', idade: 21 });

// function funcao([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3);
// }

// funcao(['Gabriel', 'Silva', 21]);

const conta = (...args) => {
    // for (let numero of numeros) {
    //     if (operador === '+') acumulador += numero;
    //     if (operador === '-') acumulador -= numero;
    //     if (operador === '/') acumulador /= numero;
    //     if (operador === '*') acumulador *= numero;
    // }

    // console.log(acumulador);

    console.log(args);
};
conta('+', 0, 20, 40, 50);
