const nome = prompt('Digite seu nome completo:');
document.body.innerHTML += `O seu nome é: <strong>${nome}</strong> <br />`;
document.body.innerHTML += `Seu nome tem <strong>${nome.length}</strong> letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome.charAt(1)}</strong></strong> <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra E no seu nome? <strong>${nome.toLowerCase().indexOf('e')}</strong><br />`;
document.body.innerHTML += `Qual o último índice da letra E no seu nome? <strong>${nome.toLowerCase().lastIndexOf('e')}</strong> <br />`;

// document.body.innerHTML += `As últimas 3 letras do seu nome sao: <strong>${nome.substring(nome.length -3, nome.length)}</strong> <br />`;

document.body.innerHTML += `As últimas 3 letras do seu nome sao: <strong>${nome.slice(-3, nome.length)}</strong> <br />`;

document.body.innerHTML += `As palavras do seu nome sao: <strong>${nome.split(" ")}</strong> <br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong> <br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong>`;