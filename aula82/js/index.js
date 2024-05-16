// const _velocidade = Symbol('velocidade');

// class Carro {
//     constructor(nome) {
//         this.nome = nome;
//         this[_velocidade] = 0;
//     }

//     get velocidade() {
//         console.log('GETTER');
//         return this[_velocidade];
//     }
    
//     set velocidade(valor) {
//         console.log('SETTER');
//         if(typeof valor !== 'number') return;
//         if(valor >= 100 || valor <= 0) return;
//         this[_velocidade] = valor;
//     }

//     acelerar() {
//         if (this[_velocidade] >= 100) return;
//         this[_velocidade]++;
//     }

//     freiar() {
//         if (this[_velocidade] <= 0) return;
//         this[_velocidade]--;
//     }
// }

// const c1 = new Carro('Fusca');
// for (let i = 0; i <= 200; i++) {
//     c1.acelerar();
// }

// c1.velocidade = 109;
// console.log(c1.velocidade);

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Gabriel', 'Silva');
p1.nomeCompleto = 'Gabriel Augusto de Oliveira Silva';
console.log(p1.nome);
console.log(p1.nomeCompleto);