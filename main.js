// usar alguna forma de manejar datos de manera asincrona
// por medio de promesas y un manejador de data en el server


import { Bebida } from "./models/Bebida.js"
import { JsonManager } from "./repository/JsonManager.js"



const main = async () => {
//  ---> desde cero
// challenge---> hacer un manager con un json pero con un objeto que sea del tipo de usuarios

    const manager = new JsonManager("storage/database.json")

    await manager.writeDataToLocal(new Bebida("cerveza", "Quilmes"))
    await manager.writeDataToLocal(new Bebida("cerveza", "Stella Artois"))

    const bebidas = await manager.getDataFromlocal()
    console.log(bebidas);
}


main()