const readline = require('readline');

const rl = readline.createInterface
({
    input : process.stdin,
    output : process.stdout
});

rl.question("Ingrese una frase: ", (frase) => {
    const fraseCapitalizada = frase.toLowerCase().split(' ').map(palabra => {
        return (palabra.charAt(0).toUpperCase() + palabra.slice(1));
    }).join(' ');
    
    console.log(`Frase capitalizada: ${fraseCapitalizada}.`);
    rl.close();
});