window.addEventListener('load', function () {

    alert("A página foi carregada.");


    var valor1 = 10;
    var valor2 = 5;


    var soma = valor1 + valor2;
    alert("A soma dos valores é: " + soma);


    var divisao = valor1 / valor2;
    alert("A divisão dos valores é: " + divisao);


    var multiplicacao = valor1 * valor2;
    alert("A multiplicação dos valores é: " + multiplicacao);


    if (valor1 === valor2) {
        alert("Os valores são iguais.");
    } else {
        alert("Os valores não são iguais.");
    }
});