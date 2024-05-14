function buscarPorNombre(arrayObjetos, nombre)
{
    return arrayObjetos.find(objeto => objeto.nombre == nombre);
}

let arrayObjetos = 
[
    {
        nombre: "Carlos",
        edad: 23,
        genero: "Masculino"
    },
    {
        nombre: "Fernando",
        edad: 25,
        genero: "Masculino"
    },
    {
        nombre: "Ana",
        edad: 33,
        genero: "Femenino"
    },
];

console.log(buscarPorNombre(arrayObjetos, "Carlos"));