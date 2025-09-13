//IMPORTO EL MODULO FS DE NODE ME PERDMITE LEER Y ESCRIBIR ARCHIVOS
import fs from "node:fs/promises";

/**
 * 
 * 
 * TODA LA LOGICA DE LOS OBJETOS A USAR
 */
class JsonManager {
    db = []

    constructor(path) {
        this.path = path
    }

    //METODO PARA LEER LA BASE DE DATOS
    async getDataFromlocal() {
        try {
            //leo el archivo, le paso la ruta y el encoding
            const response = await fs.readFile(this.path, { encoding: "utf8" })
            //JSON.PARSE -> convierte un string a un objeto porque json es un string
            const data = await JSON.parse(response)
            //si no hay data tiro un error
            if (!data) throw Error() // guard clauses -> early returns

            return data
        }
        catch (error) {
            console.error({ error: error.message })
            //si da error devuelvo un array vacio para poder seguir trabajando
            return []
        }
    }

    //METODO PARA ESCRIBIR EN LA BASE DE DATOS
    async writeDataToLocal(bebidas) {
        const data = await this.getDataFromlocal()

        console.log(`base de datos original ${bebidas.nombre}`, data);

        this.db = data
        this.db.push(bebidas)

        try {
            // JSON.STRINGIFY -> convierte un objeto a un string ty lo formatea
            const dataString = JSON.stringify(this.db, null, 2)
            //escribo en el archivo, le paso la ruta, el string y el encoding
            await fs.writeFile(this.path, dataString, { encoding: 'utf8' })
            //devuelvo un estado y los elementos agregados
            console.log({
                Ok: true,
                payload: bebidas,
                message: "La bebida fue agregada"
            });
        }
        catch (error) {
            console.error({
                Ok: false,
                message: error.message
            });

        }
    }
}

/**
 * 
 * TODOS LOS OBJETOS QUE QUIERO EXPONER DENTRO DEL PROYECTO
*/
export {JsonManager}