var numero1 = 0;
var numero2 = 0;
var operacion;

//Funcion para agregar un numero o signo en pantalla.
function agregarNumero(numero){
   if(document.getElementById("calc").value == "0" || numero1 == 0){
       numero1 = numero;
   }else{
       numero1 += numero;
   }
       document.getElementById("calc").value = numero1;
}



//Esta funcion se llama cada vez que se presiona un boton de operacion.
function operacion(valor){
    numero2 = parseInt(numero1);
    numero1= 0;
    operacion = valor;
}

//Casos para boton de resultado
//suma = 1, resta = 2, multiplicacion = 3,
//division = 4, exponente = 5
function resultado(){
   numero1 = parseInt(numero1);
    switch (operacion){
        case 1:
            numero1 += numero2;
        break;
        case 2:
            numero1 = numero2 - numero1;
        break;
        case 3:
            numero1 *= numero2;
        break;
        case 4:
            numero1 = numero2 / numero1;
        break;
        case 5:
            numero1 = Math.pow(numero2, numero1);
        break;
    }
    document.getElementById("calc").value = numero1;
    numero2 = parseInt(numero1);
}
