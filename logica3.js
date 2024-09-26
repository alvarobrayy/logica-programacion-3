const prompt = require('prompt-sync')();

let numero = prompt("Por favor, ingresa un número:");

numero = Number(numero);

if (numero === numero && numero >= 0 && numero % 1 === 0) {
    
    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial *= i; 
    }

    console.log(`El factorial de ${numero} es ${factorial}.`);
} else {
   
    console.log("Por favor, ingresa un número válido.");
}

