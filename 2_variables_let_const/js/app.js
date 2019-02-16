//variables const

/*
Las variables const, son un tipo de variable que se tienen que asignar siempre a un valor
en el momento de su declaración y nunca podrán ser reasignadas. Por lo tanto,
son variables de 'solo lectura'
*/

//const sinAsignar;

//console.log('Si se declara una variable \'const\' sin asignar provoca un error de sintaxis', sinAsignar);

const asignado = 'tengo un valor';
console.log('por lo tanto siempre se le deben de asignar un valor', asignado);

console.log('si se pretende cambiar su valor también provocará un error');
//asignado = 'otro valor';

/*Las variables let son similares a var, la diferencia radica en el scope, el alcance de las
variables let está limitado por el bloque de su declaración o espresión donde se utilza,
mientras que var se define como variable global o local en una función sin importar el ámbito
del bloque
*/


function uso_var() {
    console.log('Ejemplo de variables con var');
    var x = 30;
    console.log('valor de x antes del if',x);
    if (true) {
        var x = 1000;
        console.log('valor de x dentro if', x);
    }
    console.log('valor de x despues del if',x);
    console.log('===== FIN =====');
}


function uso_let() {
    console.log('Ejemplo de variables con let');
    let x = 30;
    console.log('valor de x antes del if',x);
    if (true) {
        let x = 1000;
        console.log('valor de x dentro if', x);
    }
    console.log('valor de x despues del if',x);
    console.log('===== FIN =====');
}

uso_var();
uso_let();