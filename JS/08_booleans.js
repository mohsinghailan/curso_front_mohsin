/* 
Condicionales en JS

if(condicion) {
    // codigo
}

if(condicion) {
    // codigo A
} else {
    // codigo B
}

if(condicion) {
    // codigo A
} else if (condicion2) {
    // codigo B
} else {
    // codigo C
} */

let x = 3
x = 5
x = '3'

// Comparación igual ==
// Comparación idéntico (en valor y tipo) ===
// Comparación distinto !=
// Comparación no-idéntico !==

// Casting a boolean
// Valores falsy -> falso
x = false
x = undefined
x = ''
x = NaN
x = 0
x = null
// Valores truly -> true
x = true
x = 25
x = 'Pepe'
x = {} // objeto
x = [] //arrayd
x = function () {}

if(x === 3) {
    console.log('Es verdadero')
} else {
    console.log('Es falso')
}