// let nome = 'Gabriel Silva';
// nome = 'Lucas';
// console.log(nome[3]);

// let a = 'A';
// let b = a; // Cópia

// console.log(a, b);

// a = 'Outra coisa';
// console.log(a, b);

// let a = [1, 2, 3];
// let b = [...a];

// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

const pessoa = {
    nome: 'Luiza',
    sobrenome: 'Diniz'
};

const a = {...pessoa};

a.nome = 'Gabriel';
console.log(a);
console.log(pessoa);