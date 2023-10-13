let listaFrutas = ["manzanas","platanos","naranjas", "peras","uvas"];
console.log(typeof listaFrutas)

// agregas un elemento all final del array.
listaFrutas.push("sandias");
console.log("Después del push: ", listaFrutas);

let arrayNumeros = [1,2,3,4,5,6,7,8,9,10];
console.log("Antes del pop: ",arrayNumeros);

//Eliminar el último elemento del array.
arrayNumeros.pop();
console.log("Después del pop: ", arrayNumeros);

//Eliminar el primer elemento del array.
arrayNumeros.shift();
console.log("Después del shift: ",arrayNumeros);

//Carrito de compras:
let objmanzana = {
    "name":"manzana",
    "qty": 10,
    "price":100,
    "utilidad": {
        "casa": ["comer","hacer jugo","decorar"],
        "medicina":"curar la diarrea",
        "postre":"torta de manzana"
    }
}

let objplatano = {
    "name":"platano",
    "qty":10,
    "price":100
}

//Carrito de compras vacío.
let carritoDeCompra = [];
//Presiona un botón de agregar.
carritoDeCompra.push(objmanzana);   
console.log("carritoDeCompra: ",carritoDeCompra)
//Seguimos navegando en el sitio.
carritoDeCompra.push(objplatano);
//Accedemos al nombre de la posición en el array.
console.log(carritoDeCompra[1].name);

let arrayMixto= [1,2,3,"hola","mundo",true,false,{"name":"juan" ,"edad":20},[1,2,3,4,5]];
console.log(arrayMixto[8][2])

//Ciclos
//Promedio array
let arrayNumeros2=[1,2,3,4,5,6,7,8,9,10];
let cantidadDeNumeros = arrayNumeros2.length;
let suma = 0;
for (let i=0; i< arrayNumeros2.length; i++){
    suma += arrayNumeros2[i]
}
let promedio = suma/ cantidadDeNumeros;
console.log("El promedio es: ", promedio);

// Posición que ocupa dentro del array.
console.log(arrayNumeros2.indexOf(10));

console.time("Loop no optimo");
var array = new Array(10000000);
for (var i = 0; i < array.length; i++){
    array[i]=i;
}
console.timeEnd("Loop no optimo");

console.time("Loop optimo");
var array = new Array(10000000);
var length = array.length;
for (var i = 0; i<length; i++){
    array[i]= i;
}
console.timeEnd("Loop optimo");

const abecedario = ["a","b","c","d"]
//for of
for(const letra of abecedario){
    console.log(letra);
}



