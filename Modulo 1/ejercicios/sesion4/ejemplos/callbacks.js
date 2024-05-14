const readline = require('readline');

const rl = readline.createInterface
({
    input : process.stdin,
    output : process.stdout
});

function Saludar(nombre)
{
    console.log(`Hola ${nombre}`);
}

function procesarEntrada(callback)
{
    rl.question("Por favor ingresa tu nombre: ", (nombre) =>
    {
        callback(nombre);
        rl.close();
    });
}

procesarEntrada(Saludar);