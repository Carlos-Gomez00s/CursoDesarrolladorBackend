

function MultiplicarPromise(numberA, numberB)
{
    return new Promise((resolve, reject) => 
    {
        const resultado = numberA * numberB;

        if(isNaN(resultado))
        {
            reject("Error en la operacion");
        }
        else
        {
            resolve(resultado);
        }
    });
}

MultiplicarPromise(2, 3)
    .then(resultado => 
    {
        console.log(resultado);
    })
    .catch(error => 
    {
        console.log(error);
    });