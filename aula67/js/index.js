const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numeros.reduce(function(acumulador, valor) {
//     if (valor % 2 === 0) acumulador.push(valor);
    
//     // acumulador += valor;
//     return acumulador;
// }, []);
// const total = numeros.reduce(function(acumulador, valor) {
//     acumulador.push(valor * 2);
    
//     // acumulador += valor;
//     return acumulador;
// }, []);
const total = numeros.reduce(function(acumulador, valor) {
    if(valor % 2 !== 0) acumulador += valor;
    
    // acumulador += valor;
    return acumulador;
}, 0);
console.log(total);

const pessoas = [
    { nome: 'Gabriel Silva', idade: 21 },
    { nome: 'Lucas PGui', idade: 23 },
    { nome: 'Paulo Henrique', idade: 55 },
    { nome: 'Estevao Mathias', idade: 19 },
    { nome: 'Matheus Gerson', idade: 32 },
    { nome: 'André Espejo', idade: 47 }
];

const maisVelha = pessoas.reduce(function(acumulador,valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);
