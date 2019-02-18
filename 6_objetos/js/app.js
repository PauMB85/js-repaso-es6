//Object literal

const persona = {
    nombre: 'Juan',
    profesion: 'Comercial',
    edad: 20,
    trabaja: true
};

console.log(persona);

//acceso a los atributos del objeto
console.log(persona.nombre);
console.log(persona['nombre']);


//Object constructor

function Persona(nombre,profesion,edad,trabaja) {
    this.nombre = nombre;
    this.profesion = profesion;
    this.edad = edad;
    this.trabaja = trabaja;
}

const persona2 = new Persona('Toni','pintor',21,false);
console.log(persona2);
//acceso a los atributos
console.log(persona2.nombre);
console.log(persona2['nombre']);


//Prototype - asigna funciones a los objetos creados
Persona.prototype.mostrarInformacionPersona = function() {
    return `La Persona se llama ${this.nombre} y trabaja ${this.profesion}`;
}
const infoPersona = persona2.mostrarInformacionPersona();
console.log(infoPersona);

//Destructuring - nueva forma de acceder a los atributos del objeto
const myObjeto = {
    version: {
        nueva: 'ES6',
        antigua: 'ES5'
    }
}
//forma antinugua
let versionNueva = myObjeto.version.nueva;
console.log(versionNueva);
//ES6
let {nueva} = myObjeto.version;
console.log(nueva);

//Enhacement - coloca los objetos
const banda = 'Metallica';
const genero = 'Heavy';
const canciones = ['Master of puppets','one','Enter Sandman'];

//forma antigua (object literal)
const metallica = {
    banda: banda,
    genero: genero,
    canciones: canciones
}
console.log(metallica);
//ES6
const metallicaES6 = {banda, genero, canciones};
console.log(metallicaES6);

//Agregar funciones a un objeto
const persona3 = {
    nombre: 'juan',
    edad: 20,
    mostrarInfo() {
        const texto = `${this.nombre} tiene una edad de ${this.edad}`;
        console.log(texto);
    }
};

persona3.mostrarInfo();