
function combinarObjetos(a, b)
{
    return comunidadEducativa = [...a, ...b];
}

let estudiantes = 
[
    {
        nombre : "Carlos",
        edad : 20
    },
    {
        nombre : "Douglas",
        edad : 22
    },
    {
        nombre : "Fernando",
        edad : 21
    },
];

let profesores = 
[
    {
        nombre : "Juan",
        materia : "Matematicas"
    },
    {
        nombre : "Medardo",
        materia : "Lenguaje"
    },
    {
        nombre : "Antonio",
        materia : "Ciencias"
    },
];

let comunidad = combinarObjetos(estudiantes, profesores);
console.log(comunidad);