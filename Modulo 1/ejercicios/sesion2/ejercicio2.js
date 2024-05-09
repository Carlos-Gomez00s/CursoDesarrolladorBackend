// Desarrolle un algoritmo que le permita mostrar la hora actual en
// un mensaje, para este ejercicio debera de declarar la instancia
// fecha para una new Date() y las variables receptoras de la hora
// (hora, minutos, segundos) solicitarlo con los datos 

var fecha = new Date();
fecha.horas = fecha.getHours();
fecha.minutos = fecha.getMinutes();
fecha.segundos = fecha.getSeconds();

console.log(`La hora actual es ${fecha.horas}:${fecha.minutos}:${fecha.segundos}`);