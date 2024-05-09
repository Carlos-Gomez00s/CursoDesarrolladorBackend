
let personas = 
[
    {
        nombre: "Carlos",
        edad: 33,
        ciudad: "Santa Ana"
    },
    {
        nombre: "Fernando",
        edad: 35,
        ciudad: "Santa Ana"
    },
    {
        nombre: "Boris",
        edad: 50,
        ciudad: "San Salvador"
    },
    {
        nombre: "Douglas",
        edad: 25,
        ciudad: "Santa Tecla"
    },
];

function filtrarPersonas(arrayPersonas, ciudad)
{
    return arrayPersonas.filter(persona => persona.edad > 30 && persona.ciudad == ciudad);
}
let ciudad = "Santa Ana";
let personasFiltradas = filtrarPersonas(personas, ciudad);
console.log(personasFiltradas);