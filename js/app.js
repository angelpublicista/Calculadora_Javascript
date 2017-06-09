Calculadora = (function(){
  
//Funcion Tamaño Teclas

	function tamanoTeclas() {
		teclas = document.getElementsByClassName('tecla');
		for (i = 0; i < teclas.length; i++) {
			teclas[i].onmousedown = function() {
				this.style.padding='3px';
			};

			teclas[i].onmouseup = function() {
				this.style.padding='0';
			};
		};
	};

	tamanoTeclas();

	

//Accediendo al display
	display = document.getElementById('display');

	uno = document.getElementById('1');
	dos = document.getElementById('2');
	tres = document.getElementById('3');
	cuatro = document.getElementById('4');
	cinco = document.getElementById('5');
	seis = document.getElementById('6');
	siete = document.getElementById('7');
	ocho = document.getElementById('8');
	nueve = document.getElementById('9');
	cero = document.getElementById('0');

	numeros = [uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, cero];



	function escribir() {
		for (i in numeros) {
			numeros[i].onclick = function() {
			anterior = display.innerHTML;

			if (anterior == 0) {
					newNumber = this.getAttribute('alt');
					display.innerHTML = newNumber;
				} else {
					newNumber = anterior + this.getAttribute('alt');
					display.innerHTML = newNumber;
				};

	//Máximo de 8 caracteres

				if (newNumber.length > 8) {
					display.innerHTML = anterior;
					newNumber = newNumber.substring(0,8);
				};
			};
		};
	};

	escribir();


//ON/C
	eliminar = document.getElementById('on');
	function eliminar_todo() {
		seteado = 0;
		display.innerHTML = seteado;
	};

	eliminar.addEventListener('click', eliminar_todo);
	

//Operando
	mas = document.getElementById('mas');
	menos = document.getElementById('menos');
	por = document.getElementById('por');
	dividido = document.getElementById('dividido');
	igual = document.getElementById('igual');

function operacion() {
	numero1 = parseFloat(newNumber);
	display.innerHTML = '';
};

mas.addEventListener('click', operacion);

/*dividir: function(){
if(accion == "inicio"){accion = "dividir"}
if(accion != "dividir"){
numero1 = resultado
display.innerHTML = ''
accion = "dividir"
}else{
if(numero1 == ''){
numero1 = Number(display.innerHTML)
display.innerHTML = ''
}else{
if(display.innerHTML == resultado){
numero1 = Number(display.innerHTML)
numero2 = numero2
}else{
numero2 = Number(display.innerHTML)
}
resultado = numero1 / numero2;
display.innerHTML = this.validarDisplay(resultado)
this.agregarOperacion(resultado)
}
}
} */

	


}());