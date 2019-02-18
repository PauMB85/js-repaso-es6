let numero = [1, 2, 3];


//Map  - crea un nuevo array con los resultados de la llamada de la función indicada en cada uno
// de sus elementos
let dobleNumero = numero.map(numero => {
    return numero *2;
});

console.log(numero);
console.log(dobleNumero);

//Object.keys - devuelve un array con los nombre de las propiedades del objecto
const persona = {
    nombre: 'pepito',
    edad: 20
};
const arryaKeyPersona = Object.keys(persona);
console.log(arryaKeyPersona);