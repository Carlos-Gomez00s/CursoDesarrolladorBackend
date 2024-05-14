
function Dividir(numero1, numero2)
{
    return new Promise((resolve, reject) => 
    {
        if(numero2 == 0)
        {
            reject("Error al intentar dividir por cero");
        }
        else
        {
            resolve(numero1 / numero2);
        }
    });
}

Dividir(10, 2)
    .then(resultado => 
    {
        console.log(resultado);
    })
    .catch(error => 
    {
        console.log(error);
    });