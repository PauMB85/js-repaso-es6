//métodos en los arrays

const personas = [
    {nombre:'Juan',edad:20},
    {nombre:'Jose',edad:21},
    {nombre:'Cristina',edad:28},
    {nombre:'Luis',edad:34},
    {nombre:'Maria',edad:30},
    {nombre:'Juana',edad:22}
];

console.log(personas);

/*
 1.- método filter crear un nuevo array con todos los elementos que cumplan la condición
 implementada por una función dada
 */
const mayores25 = personas.filter(persona => {
    return persona.edad > 25
});

//este método se puede simplificar sin return, ya que es una sola linea
const mayores25_2 = personas.filter(persona => persona.edad >25);

console.log('método 1',mayores25);
console.log('método 2',mayores25_2);

/*
2.- método find devuelve el valor del primer elemento del array que cumple 
la función proporcionada
*/

const luis = personas.find(persona => {
    return persona.nombre ===  'Luis';
});
console.log(luis);