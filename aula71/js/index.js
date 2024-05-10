function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque,
        writable: true, // Permite alteracao
        configurable: true  // Configurável
    });

    // Object.defineProperties(this, {
    //     nome: {
    //         enumerable: true, // Mostra a chave
    //         value: nome,
    //         writable: true, // Permite alteracao
    //         configurable: true  // Configurável
    //     },
    //     preco: {
    //         enumerable: true, // Mostra a chave
    //         value: preco,
    //         writable: true, // Permite alteracao
    //         configurable: true  // Configurável
    //     },
    // });
}

const p1 = new Produto('Camiseta', 200, 4);
// p1.estoque = 5600;
// delete p1.estoque;
// console.log(p1);
console.log(p1);

for (let chave in p1) {
    console.log(chave);
}