
function OperacionAsincrona(callback)
{
    setTimeout(() => {
        callback("Operacion asincrona completada");
    }, 2000);
}

OperacionAsincrona((mensaje) =>
{
    console.log(mensaje);
});