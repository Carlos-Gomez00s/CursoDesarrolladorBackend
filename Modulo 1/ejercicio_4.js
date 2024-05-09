const { stdin, stdout } = require('process');
const readline = require('readline');

const rl = readline.createInterface
({
    input: stdin,
    output: stdout
});

rl.question("Ingrese una frase: ", (frase) => {
    rl.question("Ingrese la palabra que quiera reemplazar: ", (palabraAntigua) => {
        rl.question("Ingrese la palabra nueva: ", (palabraNueva) => {
            const fraseNueva = frase.replace(palabraAntigua, palabraNueva);
            console.log("La palabra " + palabraAntigua + " se reemplazo por " + palabraNueva + " en " + frase + " resultado: ");
            console.log(fraseNueva);
            rl.close();
        });
    });
});