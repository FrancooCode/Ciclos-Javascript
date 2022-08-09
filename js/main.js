
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
/*
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
*/





//CLASE 7 | FUNCIONES DE ORDEN SUPERIOR


const Productos = [ 
    {nombre: "harina", precio:70},
    {nombre: "huevo", precio:50},
    {nombre: "galletitas", precio:100},
    {nombre: "pan", precio:150},
    {nombre: "cerveza", precio:300},
]

let carrito = []

let seleccion = prompt ("Hola desea comprar algun producto si o no")

while (seleccion != "si" &&  seleccion != "no"){
    alert("porfavor ingresa si o no")
    seleccion = prompt("Hola desea comprar algo si o no")
}

if (seleccion == "si"){
    alert("A continuacion nuestra lista de productos")
    let todoLosProductos = Productos.map ((el) => el.nombre + " " + el.precio + "$")
    alert ( todoLosProductos.join (" - "))
} else if (seleccion == "no"){
    alert("Gracias por venir")
}



while (seleccion != "no"){
    let producto = prompt ("Agrega un producto a tu carrito")
    let precio = 0
    
    if (producto == "harina" || producto == "huevo" || producto == "galletitas"  || 
    producto == "pan" || producto == "cerveza"){
        switch (producto){
            case "harina":
                precio = 70;
                break;
            case "huevo":
                precio = 50;
                break;
            case "galletitas":
                precio = 100;
                break;
            case "pan":
                precio = 150;
                break;
            case "cerveza":
                precio = 300;
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt("Cuantas unidades desea llevar?"))

        carrito.push ({producto, unidades, precio})
        console.log (carrito)
    }else{
        alert("No disponemos de ese producto")
    }
    seleccion =prompt("Desea seguir comprando ?")

    while (seleccion === "no"){
        alert ("Gracias por la compra hasta pronto")
        carrito.forEach ((carritoFinal) =>  console.log( `producto : ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`)
        )
        break;
    }
}

const total = carrito.reduce ((acc, el) => acc + el.precio * el.unidades, 0);
console.log (`El total a pagar es de: ${total} $ `)






