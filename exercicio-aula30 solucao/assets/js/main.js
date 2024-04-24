// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function getDiaSemana(diaSemana) {
//     // switch (data.getDay()) {
//     //     case 0:
//     //         return 'Domingo';
//     //     case 1:
//     //         return 'Segunda-Feira';
//     //     case 2:
//     //         return 'Terça-Feira';
//     //     case 3:
//     //         return 'Quarta-Feira';
//     //     case 4:
//     //         return 'Quinta-Feira';
//     //     case 5:
//     //         return 'Sexta-Feira';
//     //     case 6:
//     //         return 'Sábado';
//     // }

//     const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

//     return diasSemana[diaSemana];
// }

// function getNomeMes(data) {
//     // switch (data.getMonth()) {
//     //     case 0:
//     //         return 'Janeiro';
//     //     case 1:
//     //         return 'Fevereiro';
//     //     case 2:
//     //         return 'Março';
//     //     case 3:
//     //         return 'Abril';
//     //     case 4:
//     //         return 'Maio';
//     //     case 5:
//     //         return 'Junho';
//     //     case 6:
//     //         return 'Julho';
//     //     case 7:
//     //         return 'Agosto';
//     //     case 8:
//     //         return 'Setembro';
//     //     case 9:
//     //         return 'Outubro';
//     //     case 10:
//     //         return 'Novembro';
//     //     case 11:
//     //         return 'Dezembro';
//     // }

//     const meses = ['Janeiro', 'Fevereiro', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
//     return meses[data];
// }

// function zeroAEsquerda (num) {
//     return num >= 10 ? num: `0${num}`;
// }

// function criaDate(data) {
//     const nomeDia = getDiaSemana(data);
//     const nomeMes = getNomeMes(data);

//     return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
// }

// h1.innerHTML = criaDate(data);

const h1 = document.querySelector('.container h1');
const data = new Date();

h1.innerHTML = data.toLocaleString('pt-BR', {
    dateStyle: 'full',
    timeStyle: 'short'
});