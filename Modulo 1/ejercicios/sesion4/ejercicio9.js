
function Tarea1()
{
    return new Promise((resolve) => 
    {
        setTimeout(() => {
            resolve("Tarea 1 completada");
        }, 2000);
    });
}

function Tarea2()
{
    return new Promise(resolve => 
    {
        setTimeout(() => {
            resolve("Tarea 2 completada");
        }, 3000);
    });
}

function Tarea3()
{
    return new Promise(resolve => 
    {
        setTimeout(() => {
            resolve("Tarea 3 completada");
        }, 3000);
    });
}

Promise.all([Tarea1(), Tarea2(), Tarea3()])
    .then(resultados => 
    {
        console.log("Las tareas se han completado");
        resultados.forEach(resultado => 
        {
            console.log(resultado);
        });
    })
    .catch(error => 
    {
        console.log(error);
    });