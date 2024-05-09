
function contadorPalabras(array)
{
    let contadorPalabras = {};

    array.forEach(frase => {
        const palabras = frase.split(' ');
        palabras.forEach(palabra => {
            if(contadorPalabras[palabra])
            {
                contadorPalabras[palabra]++;
            }
            else
            {
                contadorPalabras[palabra] = 1;
            }
        });
    });

    return contadorPalabras;
}

let arrayFrases = ["Hola buenos dias", "Hola buenas tardes", "Hola buenas noches"];

console.log(contadorPalabras(arrayFrases));