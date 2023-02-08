alert ("Bienvenido Viajare Piú nuevo sistema de venta de pasajes");

const nombreCliente = prompt("Ingrese su nombre");

const destinoCliente = prompt("Seleccione el lugar que desee viajar: Buenos Aires - Cordoba - Rosario - Chubut - Santa Fe - Misiones - Salta - Formosa - Rio Negro - Catamarca - Chaco - Santa Cruz - La Pampa").toUpperCase();

const cantidadPasajeros = parseInt(prompt(" Ingrese la cantidad de pasajeros"));

let menoresEdad=[];
let mayoresEdad=[]; 

let encontrar;

let precioPasaje;

const provinciasDestino = [{destino:"BUENOS AIRES", precio: 22000},
                            {destino:"CORDOBA", precio: 25000},
                            {destino:"ROSARIO", precio: 21000},
                            {destino:"CHUBUT", precio: 23000},
                            {destino:"SANTA FE", precio: 24000},
                            {destino:"MISIONES", precio: 28000},
                            {destino:"SALTA", precio: 29000},
                            {destino:"FORMOSA", precio: 26000},
                            {destino:"RIO NEGRO", precio: 19000},
                            {destino:"CATAMARCA", precio: 20000},
                            {destino:"CHACO", precio: 30000},
                            {destino:"SANTA CRUZ", precio: 29000},
                            {destino:"LA PAMPA", precio: 27000}];
    
encontrar = provinciasDestino.filter(function (encontrar) {
    if(encontrar.destino === destinoCliente){
        return  precioPasaje = encontrar.precio;
        };
});

console.log(precioPasaje)

for(let i = 0; i<cantidadPasajeros; i++){
    let nombrePasajeros = prompt("Igrese el nombre del pasajero n° "+(i+1)).toUpperCase();
    let edadPasajeros = prompt("Ingrese la edad del pasajero n° "+(i+1));
    if(edadPasajeros<18){
        menoresEdad.push(nombrePasajeros);
    }else{
        mayoresEdad.push(nombrePasajeros);
    }
}

class ViajeDelPasajero{                         
    constructor (nombre , destino , pasajeros, precio , clienteMayoresEdad, clientesMenoresEdad){
        this.nombre = nombre;
        this.destino = destino;
        this.pasajeros = pasajeros;
        this.precio = precio;
        this.clienteMayoresEdad = clienteMayoresEdad;
        this.clientesMenoresEdad = clientesMenoresEdad;
        this.precioMenoresEdad = 0;
        this.totalCostoPasaje = 0;
    }

    pasajerosMenoresEdad(){
        this.precioMenoresEdad= this.precio/2;
    }

    costoTotal(){
        this.totalCostoPasaje = (this.clientesMenoresEdad.length*this.precioMenoresEdad) +   this.clienteMayoresEdad.length*this.precio;
    }    

}

const pasaje = new ViajeDelPasajero( nombreCliente , destinoCliente, cantidadPasajeros, precioPasaje, mayoresEdad , menoresEdad);


pasaje.pasajerosMenoresEdad();
pasaje.costoTotal();

if(pasaje.clientesMenoresEdad.length >0 ){
    console.log("Sr/a. "+ nombreCliente+": Los pasajeros menores de 18 años son : " +pasaje.clientesMenoresEdad+", el valor de cada uno de sus pasajes es: $"+ pasaje.precioMenoresEdad);

    alert("Sr/a. "+ nombreCliente+": os pasajeros menores de 18 años son : " +pasaje.clientesMenoresEdad+", el valor de cada uno de sus pasajes es: $"+ pasaje.precioMenoresEdad);
}

if(pasaje.clientesMenoresEdad.length >0){
    console.log("Los pasajeros mayores de 18 años son : " +pasaje.clienteMayoresEdad+", el valor de cada uno de sus pasajes es: $"+ pasaje.precio);

    alert("Los pasajeros mayores de 18 años son : " +pasaje.clienteMayoresEdad+", el valor de cada uno de sus pasajes es: $"+ pasaje.precio);

}

console.log("El costo total del pasaje es $"+pasaje.totalCostoPasaje);

alert("El costo total del pasaje es $"+pasaje.totalCostoPasaje)


