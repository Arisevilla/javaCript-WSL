let estudiante ={
    nombre: "Jose",
    apellido: "Perez",
    rut : "1234563-9",
    edad: 20,
    direccion: {
        calle:"Av. Siempre viva",
        numero:123
    },
}



let datosEstudiante= estudiante.direccion.calle;

let nuevoObjeto = new Object();
nuevoObjeto.nombre = "Juan";
nuevoObjeto.apellido = "Perez";
nuevoObjeto.edad = 20;

estudiante.notas = [1,2,3,4,5];
let estudiante2 = {...estudiante} 

console.log(nuevoObjeto["nombre"]);
console.log(estudiante);
console.log(nuevoObjeto);
console.log(estudiante2);


