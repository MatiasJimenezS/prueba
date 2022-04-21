//console.log('Hola Mundo')

//! Tipo de datos en JS

// String: cadena de caracteres.  Ej: 'a' 'hola mundo' 'etc...' siempre usar '' en los strings
// Boolean: true o false. 
// Null: nulo. 
// Number: 123456... etc
// '123' es un valor string  -  123 sin comillas es un number 
// Underfined: es una variable que no esta definida 
// Object: Objeto.



//! Definicion de Variables (siempre tienen que comenzar con una letra del alfabeto) 

// var Esta variable hara que se situe en el comienzo de archivo y se ejecutara. No es recomendable su uso.
// let
// cons

let miPrimeraVariable = 'Mi primera variable!'
//console.log(miPrimeraVariable);

//! mutabilidad: es cuando se cambia el valor a la variable previamente hecha
miPrimeraVariable = 'Esto ha cambiado'
//console.log(miPrimeraVariable);

// variables Boolean
let miBoolean = true
let miOtroBool = false

let miNumero = 0
let miNumero2 = 12
let miNumero3 = -258

//console.log(miNumero, miNumero2, miNumero3, miBoolean, miOtroBool, miPrimeraVariable);

let undef
//console.log(undef);

let nulo = null
//console.log('nulo', 12, nulo);


//! Objeto : es una agrupacion de datos y estos datos tienen sentido entre si.
const miPrimerObjeto = {}

const miObjeto = {
    unNumero: 12,
    unString: 'Esta cadena de caracteres',
    unaCondicion: true, 
}
//console.log(miObjeto.unString);

const arrVacio = []
const arr = [1, 2, 'hola', miObjeto] 
// console.log(arrVacio, arr);

arrVacio.push(5)
arrVacio.push(3)
arrVacio.push(1)
arrVacio.push('hola')
arrVacio.push(miPrimeraVariable)
//console.log(arrVacio);


//! Ejercicios numericos
const suma = 1 + 2
const restar = 1 - 2
const multiplicar = 1 * 2
const dividir = 9 / 3
//console.log(suma, restar, multiplicar, dividir);

const modulo = 10 % 3
//console.log(modulo);

let num = 5
//! debemos usar 'let' (+ - / *) aumentar o disminuir la variable

//num++
//num++
//num++
//num++
//num++

num += 5
num -= 5
num *= 5
num /= 2
//console.log(num);


//! Operadores de comparacion

// Igualdad estricta
const resultado1 = 5 === 6

// Igualdad no estricta, strings pueden ser iguales a numeros si el valor de caracteres 'cinco' es el mismo
const resultado2 = 5 == '5'

const resultado3 = 5 < 6
const resultado4 = 5 < 5
const resultado5 = 5 > 6
const resultado6 = 5 > 4
const resultado7 = 5 <= 5
const resultado8 = 5 <= 6
const resultado9 = 5 >= 5
const resultado10 = 5 >= 6

//! Desigualdad estricta  !== completamente desigual  != desigual 

const resultado11 = 5 !== 6
const resultado12 = 5 != '5'
//console.log(resultado11, resultado12);



//! Operadores Logicos   or = ||  and = &&   not=!
// estos operadores usan short circuit evaluation, evaluan hasta que se encuentren
// el primer valor hasta que corte la operacion

const resultadoOr = true || false  
// console.log(resultadoOr);

const resultadoAnd = true && false 
//console.log(resultadoAnd);

const resultadoNot = !false //dara vuelta el resultado si este es un boolean 
//console.log(resultadoNot);


//! Control de Flujo 

// Control de flujo if
const edad = 5
if (edad > 5 && edad < 18) {
    console.log('el nino puede jugar');}
 
//console.log('fin programa');


// Control de flujo while
let x = true
while(x){
    console.log(x);
    x = false
}
//console.log('terminando el loop');
  
// Control de flujo swtich 

let y = 3;
switch(y){
    case 1: {
        console.log('soy el case 1')
        break;
    }
    case 2: {
        console.log('soy el case 2')
        break;
    }
    case 3: {
        console.log('soy el case 3')
        break;
    }
    default: {
        console.log('soy el default')
        break;
    }
}

// Control de flujo for

for (let i = 0; i < 10; i++) {
    console.log(i);

}


holaasasdasdasdasdasdasdasd


ver que mas pasa