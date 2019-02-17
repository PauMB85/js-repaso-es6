/*Las funciones se pueden declarar de dos formas
1.- Function declaration
2.- Function expression

Los dos tipos de funciones son iguales, la diferencia está que las function declaration se pueden
declarar despues de llamarlas mientras que la function expression primero hay que declarar la función
y posteriormente llamarlas.
Los parámetros de las funciones pueden tener valores por defecto
*/


//function declaration

helloWorld('Pepe');
function helloWorld(nombre) {
    const saludo = `Hello ${nombre}`;
    console.log(saludo);
}
helloWorld('Manolo');


//function expression

//holaMundo('Jose'); --> causa un error
const holaMundo = function(nombre='Antonio') {
    const saludo = `hola ${nombre}`;
    console.log(saludo);
}
holaMundo('Josua');
holaMundo();


