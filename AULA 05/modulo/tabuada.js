/*******************************************************************************************
 * Objetivo: Realizar o cálculo de uma tabuada tendo duas entradas: a tabuada e o contador.
 * Data: 09/02/2023
 * Autor: Giovanna Rodrigues
 * Versão: 1.0
********************************************************************************************/

// retorna o resultado de uma tabuada
const calcularTabuada = function (multiplicando, maxMultiplicador) {
    let tabuada = Number(multiplicando);
    let maxContador = Number(maxMultiplicador);

    let cont = 0; // start da repetição 
    let resultado;
    let status = true;

    // Validação de entrada vazio e entrada de 0
    if (tabuada == 0 || maxContador == 0)
        status = false;
    // Validação de entrada de caracteres 
    else if (isNaN(tabuada) || isNaN(maxContador))
        status = false;
    else {

        //         while (cont <= maxContador) {
        //             resultado = tabuada * cont;
        //             //2x0=0
        //             console.log(tabuada + 'x' + cont + '=' + resultado);
        //             cont += 1;
        //         }
       
        for (let cont = 0; cont <= maxContador; cont++) {
            resultado = tabuada * cont;
            console.log(`${tabuada}x${cont}=${resultado}`);
        }

    }

    return status;

};

// calcularTabuada(2, 10);

module.exports = {
    calcularTabuada
}