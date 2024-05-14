
function RetrasarPromesa(miliSegundos)
{
    return new Promise((resolve, reject) => 
    {
        setTimeout(() => {
            resolve(`La promesa se resolvio en ${miliSegundos} milisegundos`);
        }, miliSegundos);
    });
}

RetrasarPromesa(2000)
    .then(resultado => 
    {
        console.log(resultado);
    });