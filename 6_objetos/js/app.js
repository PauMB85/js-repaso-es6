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