let data = 20
data = 30

console.log(data)

const DATA = 25
//DATA = 50 daría un error

console.log(DATA)
//La const es un objeto pero que solo se puede cambiar por dentro pero no por fuera
const user = {
    name: 'Pepe',
    edad: 25
}

// Java / C#... son Lenguajes orientados a objetos
// user1 = new User()

//JS es un lenguaje orientado a objetos basado en prototipos y objetos literales

user.altura = 179
user.name = 'Carlos'

console.log (user)
console.log (user.name)
console.log (user.edad)


