// Asignación

let x = 23
// x = x + 1
x++
// x = x - 1
x--

// Aritmeticos
y = 2

let r
r = x + y // 25
r = x - y // 21
r = x * y // 46
r = x / y // 11.5
r = parseInt( x / y) // 11

//r = Math.round()
//r = Math.ceil()
//r = Math.floor()

r = x % y
console.log

y = 2
y += 3
// y = y + 3
y -= 3
// y = y - 3
y *= 2
y /= 3
y %= 2


//Operador ternario
let edad = 15
let i
if ( edad >= 18 ) {
    i = 0
} else {
    i = 1
}

/* //condicion ? 
____ ? ______ : ______ */

i = (edad >= 18) ? 0 : 1
console.log('Indice', i)

// Objetos en Notación JSON
let user = {
    nombre: 'Pepe',
    edad : 23
}
console.log(user.nombre)

// Arrays lista ordenada de elementos, para acceder a uno de ellos dime el elemnto x de la lista
let numeros = [12, 45, 67]
let usuarios = ['Pepe', 'Juan', 'Rosa', 'Maria']
console.log(usuarios[1])
usuarios[ usuarios.length] = 'Ramon'
usuarios[ usuarios.length] = 'Carolina'
usuarios[100] = 'Ernesto'
console.log( usuarios.length )

// Mensajes al usuario

let mensajes = [
    'Bienvenido al casino',
    'No se admiten menores de edad'
]

console.log(mensajes[i])


