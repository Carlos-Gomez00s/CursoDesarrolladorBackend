
function validarObjeto(objeto)
{
    let mensaje = "";
    const propiedades = ["nombre", "direccion", "telefono"];

    for(let propiedad of propiedades)
    {
        if(!objeto.hasOwnProperty(propiedad))
        {
            mensaje = "Objeto No Aprobado";
            return mensaje;
        }

        mensaje = "Objeto Aprobado";
        return mensaje;
    }

}

let cliente = 
{
    nombre : "Carlos",
    direccion : "Santa Ana",
    telefono : 15487999
}

console.log(validarObjeto(cliente));