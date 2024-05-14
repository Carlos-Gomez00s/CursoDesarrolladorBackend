

function Saludar(nombre, callback)
{
    const saludo = `Hola, ${nombre}`;
    callback(saludo);
}

function Mostrar(saludo)
{
    console.log(saludo);
}

Saludar("Carlos", Mostrar);
