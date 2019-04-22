// 'Use strict'

//Ámbitos o scope de las variables

//Ámbito global

let var1 = 20;

//MUY MALA PRACTICA
//No se accede nunca a las variables globales desde las funciones
function prueba() {
    console.log(var1)
}

prueba()


//Lo mismo con BUENAS PRÁCTICAS

let var2 = 30
pruebaBien(var2)


function pruebaBien (x) {
    console.log(x)
}


//Nuevo en ES6 usar let en lugar de var

function conditional() {
    let ext = 22
    if(true) {
        let data = 23
        console.log(ext)
        console.log(data)
        }
    console.log(ext)
    //console.log(data) daría un error
}

conditional()

let x = 12

function otraPrueba () {
    // let x = 23
    x = 23
}

otraPrueba()
console.log(x)
