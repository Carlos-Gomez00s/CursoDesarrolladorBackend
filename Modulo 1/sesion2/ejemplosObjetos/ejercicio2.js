// Desarrolle un algoritmo que le permita mostrar la hora actual en
// un mensaje, para este ejercicio debera de declarar la instancia
// fecha para una new Date() y las variables receptoras de la hora
// (hora, minutos, segundos) solicitarlo con los datos 

class HoraActual
{
    fecha = new Date();
    constructor()
    {
        this.Hora = this.fecha.getHours();
        this.Minutos = this.fecha.getMinutes();
        this.Segundos = this.fecha.getSeconds();
    }

    Mostrar()
    {
        console.log(`La hora actual es ${this.Hora}:${this.Minutos}:${this.Segundos}`);
    }
}

var fechaActual = new HoraActual();

fechaActual.Mostrar();

