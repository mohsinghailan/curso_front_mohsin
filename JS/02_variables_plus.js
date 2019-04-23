/* ES6 SE UTILIZA let Y const PARA DECLARAR VARIABLES */

let nombre //declarar
nombre = 'Pepe' // Inicializar

let edad = 34 //Declarar e inicializar

// Tipos de datos

/* 
En otros lenguajes hay declaración EXPLICITA y OBLIGATORIA de tipos
int x variable x de tipo entero sin valor

En JS los tipos son 
- debiles: no se declaran explícitamente: sin IMPLICITOS al valor.
- dinámicos: pueden cambiar.

*/



// underfined
let data
console.log(data)
console.log(typeof data)


// strings
data = 'Hola amigos'
console.log(data)
console.log(typeof data)

// numbers
data = 35
console.log(data)
console.log(typeof data)

// booleans
data = true
data = false
console.log(data)
console.log(typeof data)

// underfined: nada

// object
data = {name:'Pepe', age: 34}
console.log(data)
console.log(typeof data)


// object tipo array
data = [23, 45, 78]
console.log(data)
console.log(typeof data)


function mostrar(imput) {
    console.log(imput)
    console.log(typeof imput)

}

console.log(mostrar)
console.log(typeof mostrar)