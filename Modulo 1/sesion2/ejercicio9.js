
function generarListaCompras(listaCompras)
{
    let listaLegible = "Lista de Compras: \n";

    for(let elemento in listaCompras)
    {
        listaLegible += `${elemento} : ${listaCompras[elemento]} unidades \n`
    }

    return listaLegible;

}

let listaCompras = 
{
    "Platanos" : 5,
    "Manzanas" : 3,
    "Elotes" : 2,
    "Pan" : 1
};

console.log(generarListaCompras(listaCompras));
