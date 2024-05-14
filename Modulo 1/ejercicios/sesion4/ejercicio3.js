


function Multiplicar(numberA, numberB, callback)
{   
    const resultado = numberA * numberB;
    callback(resultado);
}

MultiplicarPromise(2, 3, resultado => 
{
    console.log(`Resultado: ${resultado}`);
});