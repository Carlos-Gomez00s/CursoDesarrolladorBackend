// Desarrolla un algoritmo que permita mostrar el imc
// de una persona, utilizando un metodo mostrar la respuesta
// segun los datos que solicita la formula

class Imc
{
    constructor(peso, altura)
    {
        this.Peso = peso;
        this.Altura = altura;
    }

    Mostrar()
    {
        const imc = this.Peso/(Math.pow(this.Altura, 2));
        console.log(`El imc de la persona es: ${imc}.`);
    }
}

var persona1 = new Imc(75, 1.77);
var persona2 = new Imc(80, 1.73);

persona1.Mostrar();
persona2.Mostrar();