function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-br', {
        hour12: false
    });
}

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

setTimeout(function () {
    clearInterval(timer);
    console.log('Pgui');
}, 3000);

setTimeout(function () {
    console.log('Lucas Pgui')
}, 5000);
