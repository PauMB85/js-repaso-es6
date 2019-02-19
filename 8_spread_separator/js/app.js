//spread separator - para unir arrays

let lenguajes = ['java','python','php'];
let framework = ['spring','django','laravel'];

let combinacion = [...lenguajes,...framework];

console.log(combinacion);

//Utilidad para copia con el reverser
let ejemplo = [...lenguajes].reverse();
console.log('ejemplo',ejemplo);
console.log('lenguajes',lenguajes);