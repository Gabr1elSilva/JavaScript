function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        // value: estoque,
        // writable: true, // Permite alteracao
        configurable: true,  // Configurável
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number'){
                throw new TypeError('Bad Value');
            }
            estoquePrivado = valor;
        }
    });
}

function criaProduto(nome){
    return {
        get nome() {
            return nome;
        },
        set nome(valor){
            valor = valor.replace('coisa', '');
            nome = valor;
        }
    }
}

// const p1 = new Produto('Camiseta', 200, 4);
// console.log(p1);
// p1.estoque = 2;
// console.log(p1.estoque);

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa';
console.log(p2.nome);

