function Calculadora() {
    const display = document.querySelector('.display');

    this.inicia = function () {
        clickBotoes();
        pressionaEnter();
    };

    const pressionaEnter = function () {
        display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                realizaConta();
            }
        });
    };

    const realizaConta = function () {
        let conta = display.value;

        try {
            conta = eval(conta);

            if (!conta) {
                alert('Conta inválida!')
                return;
            }

            display.value = String(conta);
        } catch (e) {
            alert('Conta inválida!');
            return;
        }
    }

    const clearDisplay = function () {
        display.value = '';
    }

    const apagaUm = function () {
        display.value = display.value.slice(0, -1);
    }

    const clickBotoes = function () {
        document.addEventListener('click', function (e) {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                btnParaDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                clearDisplay();
            }

            if (el.classList.contains('btn-del')) {
                apagaUm();
            }

            if (el.classList.contains('btn-eq')) {
                realizaConta();
            }
        }.bind(this));
    }

    const btnParaDisplay = function(valor) {
        display.value += valor;
    }
}

const calculadora = new Calculadora();
calculadora.inicia();
