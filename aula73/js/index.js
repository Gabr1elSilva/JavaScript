const produto = { nome: 'Produto', preco: 2 };
// const outraCoisa = { ...produto, material: 'vidro' };
// const caneca = Object.assign({}, produto, { material: 'Procelana ' });
// Object.freeze(produto);
// produto.nome = 'Gabriel Silva';
// const caneca = { nome: 'Caneca', preco: 4 };

// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false,
//     value: 'Gabriel Silva'
// });
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

// produto.nome = 'Outra coisa';
// delete produto.nome;

// produto.nome = 'Caneca';
// produto.preco = 2.5
// console.log(produto);
// console.log(caneca);

console.log(Object.values(produto));
console.log(Object.entries(produto));

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}