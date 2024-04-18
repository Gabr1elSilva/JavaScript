// function imc() {
//     const form = document.querySelector('.form');
//     const resultado = document.querySelector('#resultado');

//     // function calculaIMC(evento) {

//     //     evento

//     //     const peso = document.querySelector('.peso');
//     //     const altura = document.querySelector('.altura');

//     //     const imc = Number(peso.value) / (Number(altura.value) ** 2);

//     //     if (imc < 18.5) {
//     //         resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)</p>`;
//     //         resultado.style.backgroundColor = "#CF3A23";
//     //         resultado.style.color = "white";
//     //     }

//     //     else if (imc >= 18.5 && imc <= 24.9) {
//     //         resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Peso normal)</p>`;
//     //         resultado.style.backgroundColor = "#27FAB9";

//     //     }

//     //     else if (imc >= 25 && imc <= 29.9) {
//     //         resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Sobrepeso)</p>`;
//     //         resultado.style.backgroundColor = "#7A453D";
//     //         resultado.style.color = "white";
//     //     }

//     //     else if (imc >= 30 && imc <= 34.9) {
//     //         resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)</p>`;
//     //         resultado.style.backgroundColor = "#FA2100";
//     //         resultado.style.backgroundColor = "white";
//     //     }

//     //     else if (imc >= 35 && imc <= 39.9) {
//     //         resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)</p>`;
//     //         resultado.style.backgroundColor = "#A54637";
//     //         resultado.style.color = "white";
//     //     }

//     //     else if (imc > 40) {
//     //         resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)</p>`;
//     //         resultado.style.backgroundColor = "#CF3A23";
//     //         resultado.style.color = "white"
//     //     }
//     // }

//     // form.addEventListener('submit', calculaIMC);
// }

// imc();

const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    const imc = getIMC(peso, altura);
    const nivelIMC = getNivelIMC(imc);

    const msg = `Seu IMC é ${imc} (${nivelIMC}).`;

    if (nivelIMC === 'Abaixo do peso') return setResultado(msg, '#CF3A23');
    if (nivelIMC === 'Peso normal') setResultado(msg, '#0FFABA');
    if (nivelIMC === 'Sobrepeso') return setResultado(msg, '#CF3A23');
    if (nivelIMC === 'Obesidade grau 1') return setResultado(msg, '#A54637');
    if (nivelIMC === 'Obesidade grau 2') return setResultado(msg, '#CF3A23');
    if (nivelIMC === 'Obesidade grau 3') return setResultado(msg, '#D11E01');

});

function getIMC(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}

function getNivelIMC(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) {
        return nivel[5];
    }
    
    if (imc >= 34.9) {
        return nivel[4];
    }
    
    if (imc >= 29.9) {
        return nivel[3];
    }
    
    if (imc >= 24.9) {
        return nivel[2];
    }
    
    if (imc >= 18.5) {
        return nivel[1];
    }
    
    if (imc < 18.5) {
        return nivel[0];
    }
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, cor) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();

    p.classList.add('paragrafo-resultado');
    p.innerHTML = msg;
    p.style.backgroundColor = cor;
    resultado.appendChild(p);
}
