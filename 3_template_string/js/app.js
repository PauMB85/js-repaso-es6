//Template String

/*
Los Template String son literales de texto que habilitan el uso de expresiones(variables) envueltos
por llaves y un $ al inicio, los literales deben abrirse y cerrarse con comillas invertidas
*/

let nombre = 'Pepito';
let ciudad = 'Madrid';

console.log('concatenación anterior a ES6');
let concatOld = 'Nombre: ' + nombre + ', ciudad: ' + ciudad;
console.log(concatOld);

console.log('concatenación en ES6');
let concatNew = `Nombre: ${nombre}, ciudad: ${ciudad}`;
console.log(concatNew);


//Concatenar multiples líneas

const contenedorApp = document.querySelector('#app');

let html = `<ul>
                <li> Nombre: ${nombre} </li>
                <li> Ciudad: ${ciudad} </li>
            </ul>`;

console.log('concatenacion multiples líneas', html);
contenedorApp.innerHTML = html;