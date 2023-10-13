//console.log("Hola mundo desde la consola");

//let nombreCliente = "Juan";
//console.log(typeof (nombreCliente));

//let edadCliente = 10;
//console.log(typeof(edadCliente));

//let montoAPagar = 100.8;
//console.log(typeof(montoAPagar));

//let tieneDescuento = false;
//console.log(typeof(tieneDescuento));

//let clienteRecurrente;
//console.log("clienterecurrente 1 : ", typeof (clienteRecurrente));

//clienteRecurrente = true;
//console.log("clienterecurrente 2 : ", typeof(clienteRecurrente));

//clienteRecurrente = null
//console.log("clienterecurrente 3: ", typeof(clienteRecurrente));

//let var1 = 10;
// let var2 = 10;

// let suma = var1 + var2;
// console.log(var1>var2)

// function sumar(var1, var2){
//     return var1 + var2;
// }

// let resultado = sumar(4, 5);
// console.log(resultado);

let x = 20;
function ejemplovar(){
    if (true) {
        var x = 10;

    }
    console.log("El valor es: ", x);
}
console.log("Valor de x fuera de la funcion: ", x)

ejemplovar();

function ejemploconst(){
    const z = 30;
    if(true){
        z = 50;
    }
}

