// Existen los operadores aritméticos + - * / % (modulo)

let x = 22
let nombre = 'Pepe'
let z = '2'



// Los casting es un proceso temporal de modificación del tipo durante una operación

// let division = 10 / 2
let division = x / z

console.log(division)
console.log(typeof z)

// NaN (not a number)
division = x / nombre
console.log(division)
console.log (0/0)
console.log (1/0)

/* NaN equivale al concepto matemático de indeterminación
0 / n = 0
n / 0 = Infinito
0 / 0 = NaN
*/


// Si quiero evitar indeterminaciones debo validar los datos

function dividir (x,y) {
    if ( isNaN(x) || isNaN(y) ) {
        console.log('Operadores inválidos')
        return
    }
    console.log('La division da', x / y, '€')
}

dividir(x,z)
dividir(x,nombre)



//Si hay strings tiene preferencia la concatenación 
console.log(x + z)

// para evitarlo tenemos que forzar el casting

console.log( parseFloat(x) + parseFloat(z))
console.log( Number(x) + Number(z) )
console.log ( +x + +z)

console.log(typeof z)
