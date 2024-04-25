const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backColorBody = estilosBody.backgroundColor;

console.log(backColorBody);

for (let i of ps) {
    i.style.backgroundColor = backColorBody;
    i.style.color = 'white';
}