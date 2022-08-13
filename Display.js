class Display {
    constructor(displayValorSuperior, displayValorInferior) {
        this.displayValorInferior = displayValorInferior;
        this.displayValorSuperior = displayValorSuperior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorInferior = '';
        this.valorSuperior = '';
        this.signos = {
            sumar: '+',
            dividir: '%',
            restar: '-',
            multiplicar: 'x',
        }
    }


    borrar() {
        this.valorInferior = this.valorInferior.toString().slice(0, -1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorInferior = '';
        this.valorSuperior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
    this.tipoOperacion !== 'igual' && this.calcular();
    this.tipoOperacion = tipo;
    this.valorSuperior = this.valorInferior || this.valorSuperior;
    this.valorInferior = '';
    this.imprimirValores();
    }


    agregarNumero(numero) {
        if(numero === '.' && this.valorInferior.includes('.')) return
        this.valorInferior = this.valorInferior.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores(){
        this.displayValorInferior.textContent = this.valorInferior;
        this.displayValorSuperior.textContent = `${this.valorSuperior} ${this.signos[this.tipoOperacion] || ''}` ;
    }


    calcular() {
        const valorSuperior = parseFloat(this.valorSuperior);
        const valorInferior = parseFloat(this.valorInferior);

    if( isNaN(valorInferior) || isNaN(valorSuperior) ) return
    this.valorInferior = this.calculador[this.tipoOperacion](valorSuperior, valorInferior);   
    }
}
