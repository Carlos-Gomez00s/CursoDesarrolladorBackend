
function Paso1()
{
    return new Promise((resolve, reject) => 
    {
        setTimeout(() => 
        {
            resolve(5);
            console.log("Paso 1 completado");
        }), 5000;
    });
}

function Paso2(num)
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() => 
        {
            resolve(num * 2);
            console.log("Paso 2 completado");
        }, 5000);
    });
}

function Paso3(num)
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() => 
        {
            resolve(num + 2);
            console.log("Paso 3 completado");
        }, 5000);
    });
}

Paso1()
    .then(Paso2)
    .then(Paso3)
    .then(resultado =>
    {
        console.log(resultado);
    });