//OOP

export class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad;
    }

    mostrarPrioridad() {
        const text = `La tarea ${this.nombre} tiene una prioridad ${this.prioridad}`;
        return text;
    }
}

class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }

    mostrarPrioridad() {
        const textSuper = super.mostrarPrioridad();
        const text = `y la cantidad de ${this.cantidad}`;

        return `${textSuper} ${text}`;
    }
}

//crear 1 tarea
let tarea1 = new Tarea('ejemplo', 'alta');
//console.log(tarea1);
//console.log(tarea1.mostrarPrioridad());


//compras
let comprar1 = new ComprasPendientes('manzanas','baja',5);
//console.log(comprar1);
//console.log(comprar1.mostrarPrioridad());