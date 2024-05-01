function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(nome) {
            nome = nome.split(' ');
            this.nome = nome.shift();
            this.sobrenome = nome.join(' ');
        },

        fala: function (assunto) {
            return `${this.nome} está ${assunto}`
        },
        altura: altura,
        peso: peso,
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Gabriel', 'Silva', 1.89, 100);
const p2 = criaPessoa('Lucas', 'PGui', 1.99, 110);
const p3 = criaPessoa('Paulo', 'Henrique', 1.81, 80);
// console.log(p1.fala('falando sobre JS'));
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.imc);

// p1.nomeCompleto = "Gabriel Silva";
// console.log(p1.nomeCompleto);
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.fala());

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);