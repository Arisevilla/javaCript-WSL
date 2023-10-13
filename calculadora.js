// funcion para sumar
function sumar(num1, num2){
    return num1 + num2;
}

// funcion para restar
function restar(num1, num2){
    return num1 - num2
}

// funcion para multiplicar
function multiplicar(num1, num2){
    return num1*num2;
}

// funcion para dividir
function dividir(num1,num2){
    if(num2 !== 0){
        return num1/ num2;
    } else {
        return "Error: No se puede dividir entre 0"
    }

}

// funcion principal de la calculadora
function calculadora(num1, num2, operacion){
    switch (operacion) {
        case "sumar":
            return sumar(num1,num2);
        case "restar":
            return restar(num1,num2);
        case "multiplicar":
            return multiplicar(num1,num2);
        case "dividir"():
            return dividir(num1,num2);
        default:
            return "Operacion no valida"
    }
}

const numero1 = parseFloat(prompt("Ingrese el primer número:"));
const numero2 = parseFloat(prompt("Ingrese el segundo número:"));
const operacionInput = prompt("Ingrese la operacion: sumar, restar, multiplicar o dividir")

const resultado = calculadora(numero1, numero2, operacionInput)
console.log("El resultado es: ", resultado)
