import fs from 'fs/promises';

// Escribir en un archivo
async function guardarDatos() {
    try {
        await fs.writeFile('./storage/datos.txt', 'Hola, mundo!');
        console.log('Archivo guardado correctamente');
    } catch (error) {
        console.error('Error al guardar:', error);
    }
}

// Leer un archivo
async function leerDatos() {
    try {
        const contenido = await fs.readFile('./storage/datos.txt', 'utf-8');
        console.log('Contenido del archivo:', contenido);
    } catch (error) {
        console.error('Error al leer:', error);
    }
}

guardarDatos().then(leerDatos);