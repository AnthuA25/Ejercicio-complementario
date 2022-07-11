
/*
* * Ejercicio 1
 */

for (let i = 0; i < 3; i++) {
    let numero = parseInt(prompt('Ingrese numero'));
    let suma = numero + i;
    console.log("La suma es de " + numero + "+" + i + " = " + suma)
}


/*
* * Ejercicio 2
 */
let texto = prompt('Ingrese el texto');
while(texto !== 'ESC'){
    alert("El usuario ingreso " + texto);
    texto = prompt('Ingrese el texto');
}

/*
* * Ejercicio 3
 */
let numeroIngresado = +(prompt("Ingrese le numero"))

for(let i=1; i<=numeroIngresado;i++){
    let mensaje = 'Hola';
    console.log(mensaje)
}



