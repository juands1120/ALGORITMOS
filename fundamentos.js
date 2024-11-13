let nombre= "juan";
let edad= 27;
let mayorEdad= true;
let estatura;

console.log (typeof nombre);
console.log (typeof edad);
console.log (typeof mayorEdad);
console.log (typeof estatura);

//tipos de datos complejos//
let frutas= ["pera","manzana","melon"];

let auto={
    modelo: 2024,
    marca: "Cheverolet",
    color: "Blanco",
    cilindraje: 2100,
    tipo: "camioneta"


}

//concatenando variables//
console.log("------------------------------")

console.log("bienvenido uduario " + nombre + " su edad es " + edad + " y su fruta favotita es " + frutas[1])

//ESTRUCTIRA DE CONTROL CONDICIONAL//
if (edad > 25) {
    console.log(" Es un adulto")    
}
else if (edad >18){
    console.log(" Es un joven")
}
else if (edad >13){
    console.log( " es un pelao")
}
else{
    console.log(" es un niño")
}

let suscripcion ="platinium"
switch (suscripcion){
    case "Basico":
            console.log(" muy suave o pobre ")
        break;
    case "Gold":
            console.log(" buen plan,pero sigue siendo pobre ")
        break;
    case "platinium":
            console.log(" El mejor plan")
        break
    default:
        console.log(" Este plan no existe")
}

//ESTRUCTURA DE CONTROL DE BUCLES//

let contador= 5

while (contador < 11) {
    console.log(" Este es el numero" + contador)
    contador = contador + 1
}

for(let i = 100; i > 0; i=i-10){
    console.log( "contador con for numero " + i)
}



