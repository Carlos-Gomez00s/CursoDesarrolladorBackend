
let arrayObjetos = 
[
    {
        nombre : "Carlos",
        edad : 23
    },
    {
        nombre : "Fernando",
        edad : 19
    },
    {
        nombre : "Douglas",
        edad : 22
    },
    {
        nombre : "Alex",
        edad : 30
    },
];

let personasOrdenadas = arrayObjetos.sort(persona => persona.edad);
console.log(personasOrdenadas);