Calculadora = (function(){
  
//Funcion Tamaño Teclas
	teclas = document.getElementsByClassName('tecla');

	for (i = 0; i < teclas.length; i++) {
		teclas[i].onmousedown = function() {
			this.style.padding='3px';
		};

		teclas[i].onmouseup = function() {
			this.style.padding='0';
		};
	}

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
	
	function nuevoNumero() {
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
			
		};
	};
	}

	nuevoNumero();


	

//Operando
	mas = document.getElementById('mas');
	menos = document.getElementById('menos');
	por = document.getElementById('por');
	dividido = document.getElementById('dividido');
	igual = document.getElementById('igual');

function suma() {
	result = parseFloat(newNumber) + 10;
};

mas.addEventListener('click', suma);

	

}());