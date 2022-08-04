
//Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.
/*
let ingresarNumero = parseInt(prompt("ingresar numero"))
    for (let i=1; i <= ingresarNumero; i++){
        console.log( " hola \n") 
    }
*/


    //Calcular pagos en cuotas sobre un monto determinado | CLASE 4
/*
function calcularCuota (precioTotal , cantCuotas){
    
    switch (cantCuotas){
        case 3:
            alert(precioTotal / cantCuotas);
        break;
        case 6:
            alert(precioTotal / cantCuotas);
        break;
        case 12:
            alert(precioTotal / cantCuotas);
        break;
        default:
            alert("No disponemos esa cantidad de cuotas");
        break;          
    }
}

let seguir;

do{
    const precioTotal = Number(prompt("Ingresa el precio total "))

    const cantCuotas = Number(prompt("En cuantas cuotas deseas pagar? \n3 Cuotas \n6 Cuotas \n12 Cuotas"))

    calcularCuota(precioTotal,cantCuotas)

    seguir = prompt("Desea ingresar otro monto ? SI NO").toUpperCase();

}while (seguir !== "NO");
*/





//Desafío: Incorporar Arrays | CLASE 6 

class Personas {
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

const personas = []

personas.push(new Personas ("Franco", "Nina", 19));
personas.push (new Personas ("Juan", "Medina", 17));
personas.push (new Personas ("Blas", "Amarrila",18));

for (let persona of personas){
    console.log(persona)
}
console.log(personas);






