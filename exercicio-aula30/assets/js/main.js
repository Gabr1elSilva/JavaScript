function getDiaSemana(data) {
    switch (data.getDay()) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-Feira';
        case 2:
            return 'Terça-Feira';
        case 3:
            return 'Quarta-Feira';
        case 4:
            return 'Quinta-Feira';
        case 5:
            return 'Sexta-Feira';
        case 6:
            return 'Sábado';
    }
}

function getDia(data) {
    return data.getDate();
}

function getMes(data) {
    switch (data.getMonth()) {
        case 0:
            return 'Janeiro';
        case 1:
            return 'Fevereiro';
        case 2:
            return 'Março';
        case 3:
            return 'Abril';
        case 4:
            return 'Maio';
        case 5:
            return 'Junho';
        case 6:
            return 'Julho';
        case 7:
            return 'Agosto';
        case 8:
            return 'Setembro';
        case 9:
            return 'Outubro';
        case 10:
            return 'Novembro';
        case 11:
            return 'Dezembro';
    }
}

function getAno(data) {
    return data.getFullYear();
}

function getHoras(data) {
    let msg = ''; 
    data.getHours() < 10 && data.getMinutes() < 10 ? msg = `${data.getHours()}:0${data.getMinutes()}` : msg = `${data.getHours()}:${data.getMinutes()}`;
    return msg;
}

function formataData(data) {
    msg = `${getDiaSemana(data)}, ${getDia(data)} de ${getMes(data)} de ${getAno(data)} ${getHoras(data)}` 
    return msg;
}

const texto = document.querySelector('#texto');

const data = new Date('2024-04-19 00:01:00');
texto.innerHTML = formataData(data);
