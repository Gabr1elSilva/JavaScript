// function qualquerCoisa() {
//     console.log('Lucas Pgui');
// }
// qualquerCoisa();

(function(idade, peso, altura) {
    const sobrenome = 'Silva';
    function criaNome(nome){
        return nome + " " + sobrenome;
    }
    
    function falaNome() {
        console.log(criaNome('Gabriel'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(21, 56, 1.89);
