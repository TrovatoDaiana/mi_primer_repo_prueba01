//IMPORTO MODULO CRYPTO
import crypto from 'node:crypto'

console.log("hola mundo!")
const Objeto01 ={
    nombre:"Daiana",
    edad:27

};

console.log(Objeto01)

Objeto01.nombre="Cloe"

console.log(Objeto01)

//normal funcion
function calculadora(num1,num2,operacion){
    return operacion(num1,num2)
}

function sumar(a,b){return a+b}

function restar(a,b){return a-b}

console.log(calculadora(5,3,sumar))

console.log(calculadora(5,3,restar))

//funciones anonimas
const calcu=calculadora(5,3,function(a,b){return a*b})
console.log(calcu)

const saludo= function(nombre){console.log("Hola " + nombre)}
saludo("Daiana")

//arrow function
const saludo2 = (nombre) => { console.log(`hola ${nombre}`) }
saludo2("Cloe")

const dividir = (a,b) => { return a/b }
console.log(dividir(10,2))

//PRUEBO MODULO CRYPTO
let id=crypto.randomUUID()
console.log("Imprimo un num random")
console.log(id)