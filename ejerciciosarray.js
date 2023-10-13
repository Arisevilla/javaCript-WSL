// Suma de elementos: Escribe una función que sume todos los elementos de un array numérico.
function sumaArrayNumero(array){
    let suma= 0;
    for (let i= 0; i<array.length; i++)
    suma += array[i];
    return suma
}
console.log(array([1,2,3,4,5]))
