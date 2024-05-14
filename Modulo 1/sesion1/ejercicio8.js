const readline = require('readline');

const rl = readline.createInterface
({
    input : process.stdin,
    output : process.stdout
});

rl.question("Ingrese una palabra: ", (palabra) => {
    const palabraInvertida = palabra.split('').reverse().join('');

    if(palabra == palabraInvertida)
    {
        console.log(`La palabra ${palabra} es un palindromo.`);
    }else{
        console.log(`La palabra ${palabra} no es un palindromo.`);
    }

    rl.close();
});

