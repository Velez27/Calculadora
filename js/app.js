var buttonIgual = document.getElementById('button_igual');
var buttonPunto = document.getElementById('button_punto');
var button0 = document.getElementById('button_0');
var button1 = document.getElementById('button_1');
var button2 = document.getElementById('button_2');
var button3 = document.getElementById('button_3');
var button4 = document.getElementById('button_4');
var button5 = document.getElementById('button_5');
var button6 = document.getElementById('button_6');
var button7 = document.getElementById('button_7');
var button8 = document.getElementById('button_8');
var button9 = document.getElementById('button_9');

var buttonSumar = document.getElementById('button_sumar');
var buttonRestar = document.getElementById('button_restar');
var buttonMultiplicar = document.getElementById('button_multiplicar');
var buttonDividir = document.getElementById('button_dividir');
var buttonRetroceso = document.getElementById('button_retroceso');

var inputOperador = document.getElementById('input_operador');
var inputResultado = document.getElementById('input_resultado');

button0.addEventListener('click', function() {
    inputResultado.value += button0.value;
});

button1.addEventListener('click', function() {
    inputResultado.value += button1.value;
});

button2.addEventListener('click', function() {
    inputResultado.value += button2.value;
});

button3.addEventListener('click', function() {
    inputResultado.value += button3.value;
});

button4.addEventListener('click', function() {
    inputResultado.value += button4.value;
});

button5.addEventListener('click', function() {
    inputResultado.value += button5.value;
});

button6.addEventListener('click', function() {
    inputResultado.value += button6.value;
});

button7.addEventListener('click', function() {
    inputResultado.value += button7.value;
});

button8.addEventListener('click', function() {
    inputResultado.value += button8.value;
});

button9.addEventListener('click', function() {
    inputResultado.value += button9.value;
});

buttonPunto.addEventListener('click', function() {
    inputResultado.value += buttonPunto.value;
})

var primerNumero;
var segundoNumero;
var resultado;

buttonSumar.addEventListener('click', function() {
    inputOperador.value = buttonSumar.value;
    primerNumero = parseFloat(inputResultado.value);
    inputResultado.value = "";
});

buttonRestar.addEventListener('click', function() {
    inputOperador.value = buttonRestar.value;
    primerNumero = parseFloat(inputResultado.value);
    inputResultado.value = "";
});

buttonMultiplicar.addEventListener('click', function() {
    inputOperador.value = buttonMultiplicar.value;
    primerNumero = parseFloat(inputResultado.value);
    inputResultado.value = "";
});

buttonDividir.addEventListener('click', function() {
    inputOperador.value = buttonDividir.value;
    primerNumero = parseFloat(inputResultado.value);
    inputResultado.value = "";
});

buttonIgual.addEventListener('click', function(){
    let sumar = "+";
    let restar = "-";
    let multiplicar = "*";
    let dividir = "/";

    segundoNumero = parseFloat(inputResultado.value);
    inputResultado.value = "";
    if(inputOperador.value == sumar) { 
        resultado = primerNumero + segundoNumero;
        inputResultado.value = resultado;
    }else if(inputOperador.value == restar) {
        resultado = primerNumero - segundoNumero;
        inputResultado.value = resultado;
    }else if(inputOperador.value == multiplicar) {
        resultado = primerNumero * segundoNumero;
        inputResultado.value = resultado;
    }else if(inputOperador.value == dividir) {
        if(primerNumero <= 0) {
            resultado = 'Error 0/n';
            inputResultado.value = resultado;    
        }else if(segundoNumero <= 0) {
            resultado = 'Infinito';
            inputResultado.value = resultado;
        } else {
            resultado = primerNumero / segundoNumero;
            inputResultado.value = resultado;
        }
    }
    inputOperador.value = "";

});

buttonRetroceso.addEventListener('click', function() {
    let retroceso;
    retroceso = inputResultado.value.slice(0, (inputResultado.value.length - 1));
    inputResultado.value = retroceso;
});