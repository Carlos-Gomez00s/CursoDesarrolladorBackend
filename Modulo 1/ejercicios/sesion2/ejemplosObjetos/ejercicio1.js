// Muestre en una terminal los comportamientos de un bebe como 
// - Llorar
// - Dormir
// - Comer
// Los comportamientos deben de incluir solo un mensaj con los atributos correspondientes
// para el bebe (antonio, de 3 meses, sonia de 5 mese y javier de 8 meses)

class Bebe
{
    constructor(nombre, edad)
    {
        this.Nombre = nombre;
        this.Edad = edad;
    }

    Llorar()
    {
        console.log(`El bebe ${this.Nombre} de ${this.Edad} meses esta llorando.`);
    }

    Dormir()
    {
        console.log(`El bebe ${this.Nombre} esta durmiendo.`);
    }

    Comer()
    {
        console.log(`El bebe ${this.Nombre} esta comiendo.`);
    }
}

var bebe1 = new Bebe("Antonio", 3);
var bebe2 = new Bebe("Sonia", 5);
var bebe3 = new Bebe("Javier", 8);

bebe1.Llorar();
bebe1.Dormir();
bebe1.Comer();

bebe2.Llorar();
bebe2.Dormir();
bebe2.Comer();

bebe3.Llorar();
bebe3.Dormir();
bebe3.Comer();
