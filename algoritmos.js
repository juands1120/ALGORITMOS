function saludar() {
    console.log(" hola mundo")
    alert(" Hello world")
    
}
//ALGORITMO QUE REALIZA UNA SUMA ENTRE DOS VALORES INGREADOS POR EL USUARIO//
    function suma(){
    //1. DECLARAR LAS VARIABLES NECESARIAS PARA LA FUNCION O ALGORITMO//
    let A = 0
    let B = 0
    let suma = 0

    //2.SOLICITAR AL USUARIO QUE INGRESE LOS VALORES//
    //Y ESTOS SE ASIGNA A LAS VARIABLES//

    A = parseInt(prompt(" ingrese el primer numero "))
    B = parseInt(prompt(" ingrese el segundo numero "))

    //3.REALIZAR EL PROCEDIMIENTO//

    suma = A + B 

    //4.MOSTRAR EL RESULTADO//

    alert(" El resultado de la suma es " + suma)
}

// ALGORITMO QUE REALIZA UNA SUMA, RESTA,MULTIPLICACION Y DIVISION ENTRE DOS VALORES INGRESADOS POR EL USUARIO//

    function opbasicas(){

    //1. DECLARAR LAS VARIABLES NECESARIAS PARA LA FUNCION O ALGORITMO//
        let N1 = 0
        let N2 = 0
        let suma = 0
        let resta = 0
        let multiplicacion = 0
        let division = 0

    //2.SOLICITAR AL USUARIO QUE INGRESE LOS VALORES//
    //Y ESTOS SE ASIGNA A LAS VARIABLES//

    N1 = parseInt(prompt(" ingrese el primer numero "))
    N2 = parseInt(prompt(" ingrese el segundo numero "))

    //3.REALIZAR EL PROCEDIMIENTO//

    suma = N1 + N2;
    resta = N1 - N2;
    multiplicacion = N1 * N2;
    division = N1 / N2;

    //4.MOSTRAR EL RESULTADO//

    alert(" El resultado de las operaciones basicas es " + suma + resta + multiplicacion + division)



}

    //REALIZAR UN ALGORITMO QUE DETERMINE EL CUADRADO DE UN NUMERO QUE INGRESE EL USUARIO//

    function numcuadrado(){

    //1. DECLARAR LAS VARIABLES NECESARIAS PARA LA FUNCION O ALGORITMO//

    let N1 = 0
    let alcuadrado = 2

    //2.SOLICITAR AL USUARIO QUE INGRESE LOS VALORES//
    //Y ESTOS SE ASIGNA A LAS VARIABLES//

    N1 = parseInt(prompt(" Ingrese el numero"))

    //3.REALIZAR EL PROCEDIMIENTO//

    alcuadrado = N1 * N1;

    //4.MOSTRAR EL RESULTADO//

    alert(" El resultado de elevar al cuadrado " + alcuadrado)

}

//4 boton REALIZAR EL ALGORITMO QUE DETERMINE EL AREA DE UN TRIANGULO A PARTIR DE LA BASE Y LA ALTURA INGRESADO POR EL USUARIO B*H/2//



    function atriangulo(){
        
    //1. DECLARAR LAS VARIABLES NECESARIAS PARA LA FUNCION O ALGORITMO//

    let base = 0
    let altura = 0
    let sobre = 2
    let atriangulo = 0

    //2.SOLICITAR AL USUARIO QUE INGRESE LOS VALORES//
    //Y ESTOS SE ASIGNA A LAS VARIABLES//

    base = parseInt(prompt(" Ingrese la base "))
    altura = parseInt(prompt(" ingrese la altura"))


    //3.REALIZAR EL PROCEDIMIENTO//

    atriangulo = (base * altura) / sobre

    //4.MOSTRAR EL RESULTADO//

    alert(" El resultado de el area del triangulo es " + atriangulo)


    }
//CONVERSION DE UNIDADES: REALIZAR UN SISTEMA QUE CONVIERTA EN KILOMETROS, METROS UN VALOR DADO EN PULGADAS Y CM//

    function cvunidades(){

    //1. DECLARAR LAS VARIABLES NECESARIAS PARA LA FUNCION O ALGORITMO//

    let kpg = 39370
    let kcm = 100000
    let mpg = 39.37
    let mcm =100
    let pg =0
    let cm = 0
    let conkpg = 0
    let conkcm = 0
    let conmpg = 0
    let conmcm = 0

    //2.SOLICITAR AL USUARIO QUE INGRESE LOS VALORES//
    //Y ESTOS SE ASIGNA A LAS VARIABLES//

    pg = parseInt(prompt(" Ingrese las pulgadas "))
    cm = parseInt(prompt(" Ingrese los cm"))

   //3.REALIZAR EL PROCEDIMIENTO//

    conkpg = pg / kpg
    conkcm = cm / kcm
    conmpg = pg / mpg
    conmcm = cm / mcm

    //4.MOSTRAR EL RESULTADO//

    alert(" El resultado de pg a k es " + conkpg)
    alert(" El resultado de pg a m es " + conmpg)
    alert(" El resultado de cm a k es " + conkcm)
    alert(" El resultado de cm a m es " + conmcm)


    }

    // algoritmo que determine si el numero es par o impar //

    function paroimpar(){
    
    //1. DECLARAR LAS VARIABLES NECESARIAS PARA LA FUNCION O ALGORITMO//
    N1 = 0
    
    N1 = parseInt(prompt(" ingrese el numero "))

    if (N1 % 2 == 0){
        alert( N1 + " Es numero par")
    }
    else{
        alert( N1 + " es numero impar")
    }
    }

    // algoritmo que determine el mayor de dos numeros ingresados por el usuario //
    function nummayor(){
        n1 = 0
        n2 = 0

        n1 = parseInt(prompt(" ingrese el primer numero"))
        n2 = parseInt(prompt(" ingrese el segundo numero"))

        if (n1 > n2){
            alert( n1 + " es mayor ")
        }
        else if (n1==n2){
            alert(prompt(" los numeros son iguales"))
        }
        else{
            alert( n2 + " es mayor")
        }

    }
    // algoritmo que determine el numero menor de tres numeros //

    function nummenor(){

        let n1 = 0
        let n2 = 0
        let n3 = 0
        
        n1 = parseInt(prompt(" ingrese el primer numero"))
        n2 = parseInt(prompt(" ingrese el segundo numero"))
        n3 = parseInt(prompt(" ingrese el tercer numero"))

        if((n1<n2)&&(n1<n3)){
            alert( n1 + " es menor que" + n2 + n3)
        }
        else if ((n2<n1)&&(n2<n3)){
            alert( n2 + " es menor que " + n1 + n3)
        }
        else if ((n3<n1)&&(n3<n2)){
            alert(n3 + "es menor que " + n1 + n2)
        }
        else{
            alert(" todos son iguales")
        }
    }
    // el colegio abc requiere un sistema que capture el nombre del estudiante, materia y siete calificaciones entre 1 10 con esta informacion determinar si el estudiante aprobo o reprobo teniemdo en cuenta que aprueba con 6.1//

    function pronotas(){

        let nombre = prompt(" ingrese su nombre")
        let materia = prompt(" ingrese materia")
        let cal1 = parseInt(prompt(" ingrese la primera nota de 1-10"))
        let cal2 = parseInt(prompt(" ingrese la segunda nota de 1-10"))
        let cal3 = parseInt(prompt(" ingrese la tercera nota de 1-10"))
        let cal4 = parseInt(prompt(" ingrese la cuarta nota de 1-10"))
        let cal5 = parseInt(prompt(" ingrese la quinta nota de 1-10"))
        let cal6 = parseInt(prompt(" ingrese la sexta nota de 1-10"))
        let cal7 = parseInt(prompt(" ingrese la septima nota de 1-10"))
        let pro = 0

        pro =  (cal1 + cal2 + cal3 + cal4 + cal5 + cal6 + cal7) / 7
        if( pro >= 6.1 ){

            alert(" el estudiante " + nombre + " aprobo  " + materia + " con promedio de " + pro)
        }
        else{
            alert(" el estudiante " + nombre + " reprobo  " + materia + " con promedio de " + pro)
        }
            
        



    }
    // un individuo desea invertir su capital de un banco y requiere saber cuanto dinero ganara despues de n numero de años teniendo en cuenta que el banco paga un interes mensual del 0.7//


function inversion(){

    let capital, tiempo, interesGanancia, totalGanancias

    capital = parseInt(prompt(" por favor ingrese el capital "))
    tiempo = parseInt(promt(" por favor ingrese el tiempo"))

    interesGanancia = ((capital * 0.084) * tiempo)

    totalganacias = capital+interesGanancia
    alert(" cachon su ganacia es de: " + interesGanancia)
    alert(" cachon su ganacia total es de: " + totalGanancias)

}