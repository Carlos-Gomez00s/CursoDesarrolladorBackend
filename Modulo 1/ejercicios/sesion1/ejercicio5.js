const { stdin, stdout } = require('process');
const readline = require('readline');

const rl = readline.createInterface
({
    input : stdin,
    output : stdout
});

rl.question("Ingrese una frase: ", (frase) => {
    const inicio = 2;
    const longitud = 5;

    const substring = frase.substring(inicio, inicio + longitud);
    console.log("El substring de la cadena es: " + substring);

    rl.close();
});