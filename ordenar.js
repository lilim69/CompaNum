let num1 = parseFloat(prompt("Por favor ingresa el primer numero"));
let num2 = parseFloat(prompt("Por favor ingresa el segundo numero"));
let num3 = parseFloat(prompt("Por favor ingresa el tercer numero"));

let numeros = [num1, num2, num3];

function imprimir(mensaje) {
    console.log(mensaje);
    document.getElementById("resultado").innerHTML += mensaje + "<br>";

}

if (num1 === num2 && num2 === num3){
    imprimir("Los tres numeros son iguales: " + num1);
    
} else{
    let descendiente = numeros.slice().sort((a, b) => b - a);
    imprimir("El orden de mayor a menor es: " + descendiente.join(", "));

    let ascendente = numeros.slice().sort((a, b) => a - b);
    imprimir("El orden de menor a mayor es: " + ascendente.join(", "));
}