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

//ejemplo callbacks sincronos 
function procesarNumero(num, callback) {
    // El callback se ejecuta inmediatamente
    return callback(num);
}

function alCuadrado(x) {
    return x * x;
}

console.log(procesarNumero(4, alCuadrado)); // Imprime: 16


//ejemplo callbacks asincronos
function saludarDespues(nombre, callback) {
    setTimeout(() => {
        callback(`Hola, ${nombre}`);
    }, 2000); // Espera 2 segundos
}

function mostrarSaludo(mensaje) {
    console.log(mensaje);
}

saludarDespues("Daiana", mostrarSaludo); // Imprime: Hola, Daiana (después de 2 segundos)

//ejemplo closure
function crearContador() {
    let contador = 0;
    return function() {
        contador++;
        return contador;
    }
}

const miContador = crearContador();
console.log(miContador()); // 1
console.log(miContador()); // 2

// ejemplo clouser 2
function crearContador2(contador) {
    return function() {
        contador++;
        return contador;
    }
}

const miContador2 = crearContador2(5);
console.log(miContador2()); // 6
console.log(miContador2()); // 7

//ejemplo con arrow funcion 
const crearContador3 = (contador) => {
    return () => {
        contador++;
        return contador;
    };
};

//ejemplo arrow funcion mas compacto
const crearContador4 = (contador) => () => ++contador;

//EJEMPLO PROMESAS
function cuadradoPromise(value){
    if (typeof value !== "number") {
            return Promise.reject(`Error, el valor "${value}" ingresado no es un número`);
        }
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({
                value,
                resultado: value * value
            })
        }, 3000)
    });
}
cuadradoPromise(0)
    .then(Object => {
        console.log("Promesa: ");
    })
    .catch(error => {
        console.error("Error:", error);
    });

    //EJEMPLO CON ASYNC AWAIT
async function ejecutar() {
    try {
        const resultado = await cuadradoPromise(2);
        console.log("Promesa con async/await:", resultado);
    } catch (error) {
        console.error("Error:", error);
    }
}

ejecutar();
