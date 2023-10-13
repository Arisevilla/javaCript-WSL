function sumarNumeros(num1,num2){
    return num1+num2;
}

function restarNumeros(num1,num2){
    return num1-num2;
}

function multiplicarNumeros(num1,num2){
    return num1*num2;
}

function dividirNumeros(num1,num2){
    if(num2!==0){
        return num1/num2;
    } else {
        return "No se puede dividir entre 0"
    }
}

function calculadoraBasica(num1,num2,operacion){
    switch(operacion){
        case "1" :
            return sumarNumeros(num1,num2);
        case "2" :
            return restarNumeros(num1,num2);
        case "3" :
            return multiplicarNumeros(num1,num2);
        case "4" :
            return dividirNumeros(num1,num2);
        default:
            return "Operación no válida"
    }
}

const n1= parsefloat(prompt("Ingrese el primer número: "));
const n2= parsefloat(prompt("Ingrese el segundo número: "));
console.log("calculadora")

    console.log("Indice: ")
    console.log("1- Sumar")
    console.log("2- Restar")
    console.log("3- Multiplicar")
    console.log("4- Dividir")
    const indice=(prompt("Seleccione una opcion: "))

const resultado= calculadoraBasica(n1,n2,indice);
console.log("El resultado es: ", resultado)
    




