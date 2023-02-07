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

class ViajeDelPasajero{                         
    constructor (nombre , destino , pasajeros){
        this.nombre = nombre;
        this.destino = destino;
        this.pasajeros = pasajeros;
    }
}

const pasaje = new ViajeDelPasajero( nombreCliente , destinoCliente, cantidadPasajeros);

//funcion encotrar la provincia solicitada por el cliente

encontrar = provinciasDestino.filter(function (encontrar) {
    if(encontrar.destino === destinoCliente){
        return  precioPasaje = encontrar.precio;
    };
});

for(let i = 0; i<cantidadPasajeros; i++){
    let nombrePasajeros = prompt("Igrese el nombre del pasajero n° "+(i+1)).toUpperCase();
    let edadPasajeros = prompt("Ingrese la edad del pasajero n° "+(i+1));
    if(edadPasajeros<18){
        menoresEdad.push(nombrePasajeros);
    }else{
        mayoresEdad.push(nombrePasajeros);
    }
}

let contadorMenores = (precioPasaje*menoresEdad.length)/2;
let contadorMayores = (precioPasaje*mayoresEdad.length)
let totalCostoPasaje = contadorMayores + contadorMenores;
console.log(contadorMenores);
console.log(contadorMayores);
console.log(totalCostoPasaje);

alert("Los pasajeros menores de edad son: " +menoresEdad + ", el valor de cada uno de sus pasajes es: $"+ (precioPasaje/2));
alert("Los pasajeros mayores de 18 años son : " +mayoresEdad+precioPasaje+", el valor de cada uno de sus pasajes es: $"+ precioPasaje);
alert(" EL TOTAL DE SU COMPRA ES: $"+totalCostoPasaje);

console.log(encontrar);

