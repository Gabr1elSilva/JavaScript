function criaElemento(elemento) {
    const e = document.createElement(elemento);
    return e;
}

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const corpo = document.querySelector('.container');

for (let i in elementos) {
    const e = criaElemento(elementos[i]['tag']);

    e.classList.add();
    e.innerHTML += elementos[i]['texto'];
    
    corpo.appendChild(e);
}

