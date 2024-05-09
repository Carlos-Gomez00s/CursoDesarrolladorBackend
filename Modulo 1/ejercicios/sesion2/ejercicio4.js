function cuadradosNumeros(arrayNumeros)
{
    var cuadrados = arrayNumeros.map(numero => numero * numero);
    return cuadrados;
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(cuadradosNumeros(numeros));