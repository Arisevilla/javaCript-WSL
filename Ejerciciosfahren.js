function celAfaren(celsius){
    if (celsius !== Number){
        console.log("Error, ingrese un número: ")
    } else {
        var fahrenheit = (celsius*9/5) + 32;
        return fahrenheit;
    } 
}

celsius =_parseFloat(prompt("Introduce el valor en celsius que quieras convertir a fahrenheit: "));
resultado = celAfaren(celsius);
console.log("El resultado en fahrenheit es: ", resultado)