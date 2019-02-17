/*
Las arrow function son una nueva forma de definir funciones reduciendo la sintaxis
de una function expression. Este tipo de función son siempre anónimas.
*/

//Existen varias formas de definirlas

//1.- Función de un solo parámetro
let saludar = nombre => `Hola ${nombre}`;
const saludos = saludar('Manu');
console.log(saludos);

//2.- Función de varios parámetros
let sumar = (a,b) => a+b;
const total = sumar(2,3);
console.log(total);

//3.- Función sin parámetros
let mensaje = () => `Hola Mundo!`;
const recibirMensaje = mensaje();
console.log(recibirMensaje);

//4.- Función con cuerpo.
//Cuando ls función tiene más de una línea o no devuelve ningún valor es necesario
//utilizar las llaves.

const valRandom = Math.floor(Math.random() * 10);
let valor = (valor) => {
    let texto = '';
    if(valor < 5) {
        texto = 'es menor que 5';
    } else if(valor == 5) {
        texto = 'es 5';
    } else {
        texto = 'es mayor que 5';
    }
    return texto;
}
let numValor = (valor) => {
    const texto = `El valor recibido es ${valor}`; 
    console.log(texto);
}

const quevalor = valor(valRandom);
console.log(quevalor);
numValor(valRandom);