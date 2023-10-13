function celAfaren(celsius){
    if (isNaN(celsius)){
        console.log("Error, vuelvalo a intentar escribiendo un numero ")
    } else {
        var fahrenheit = (celsius*9/5) + 32;
        return fahrenheit;
    } 
}

celsius =_parseFloat(prompt("Introduce el valor en celsius que quieras convertir a fahrenheit: "));
resultado = celAfaren(celsius);
console.log("El resultado en fahrenheit es: ", resultado)