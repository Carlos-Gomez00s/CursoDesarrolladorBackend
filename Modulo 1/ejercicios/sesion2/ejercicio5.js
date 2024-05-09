
function sumaPares(arrayNumeros)
{
    let suma = 0;

    for(let i = 0; i < numeros.length; i++)
    {
        
        if(arrayNumeros[i] % 2 == 0)
        {
            suma = suma + arrayNumeros[i];
        }
    };

    return suma;
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sumaPares(numeros));
