const { stdin, stdout } = require('process');
const readline = require('readline');

const rl = readline.createInterface
({
    input : stdin,
    output : stdout
});

rl.question("Ingrese una frase para invertir: ", (frase) => {
    const fraseInvertida = frase.split('').reverse().join('');
    console.log("La frase invertida es: " + fraseInvertida);
    rl.close();
})