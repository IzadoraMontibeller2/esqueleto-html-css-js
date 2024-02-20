/**
 * Classe em javascript
 */
class Calculadora {

    /**
     * Método para somar os valores do formulário
     */
    somarValoresFormulario() {

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = '';

        let vlr1 = document.getElementById('vlr1');
        let vlr2 = document.getElementById('vlr2');

        let resultadoSoma = this.somar(vlr1.value, vlr2.value);

        resultado.innerHTML = resultadoSoma;
    }

    /** 
     * Método para realizar a soma de dois valores
     * Converte para float e realiza a soma
    */
    somar(a ,b) {
        a = parseFloat(a);
        b = parseFloat(b);

        let resultado = a + b;
        
        return resultado;
    }

}

var c = new Calculadora();