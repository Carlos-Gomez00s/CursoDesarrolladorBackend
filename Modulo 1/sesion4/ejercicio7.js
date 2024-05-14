
function Dividir(numero1, numero2, callback)
{
    if(numero2 == 0)
    {
        callback("Error al dividir por cero");
    }
    else
    {
        const resultado = numero1 / numero2;
        callback(null, resultado);
    }
}

Dividir(10, 5, (error, resultado) =>
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(`El resultado es: ${resultado}`);
    }
});