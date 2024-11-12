

// Clasificación de Números Pares e Impares:
// Crea un array llamado numeros y agrégale varios números enteros.
// Escribe un bucle for que recorra el array numeros.
// Dentro del bucle, usa un condicional if para verificar si cada número es par o impar.
// Si el número es par, imprime "El número X es par" (donde X es el número actual).
// Si el número es impar, imprime "El número X es impar".

// Solución 

console.log(`Ejercicio a entregar: 1`)

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    
    if (numero % 2 === 0) {
        console.log(`El número ${numero} es par`);
    } else {
        console.log(`El número ${numero} es impar`);
    }
}


// Filtrar Calificaciones:
// Declara un array llamado calificaciones que contenga varios números representando calificaciones (por ejemplo, en una escala de 0 a 100).
// Usa un bucle for para recorrer cada calificación en el array.
// Dentro del bucle, usa un condicional if para clasificar cada calificación:
// Si la calificación es menor a 60, imprime "Reprobado".
// Si la calificación está entre 60 y 80, imprime "Aprobado".
// Si la calificación es mayor a 80, imprime "Excelente".

// Solución:

console.log(`Ejercicio a entregar: 2`)

let calificaciones = [45, 75, 82, 59, 90, 68, 55, 78, 84];

for (let i = 0; i < calificaciones.length; i++) {
    let calificacion = calificaciones[i];
    
    if (calificacion < 60) {
        console.log("Reprobado");
    } else if (calificacion >= 60 && calificacion <= 80) {
        console.log("Aprobado");
    } else if (calificacion > 80) {
        console.log("Excelente");
    }
}


// Clasificación de Productos por Precio:

// Crea un array llamado precios con diferentes valores numéricos que representen el precio de varios productos.
// Escribe un bucle for que recorra cada precio en el array.
// Dentro del bucle, usa un condicional if para clasificar cada producto en función de su precio:
// Si el precio es menor a 20, imprime "Producto económico".
// Si el precio está entre 20 y 50, imprime "Producto de precio moderado".
// Si el precio es mayor a 50, imprime "Producto de lujo".


// Solución: 

console.log(`Ejercicio a entregar: 3`)

let precios = [15, 25, 55, 10, 45, 60, 30, 80, 18];

for (let i = 0; i < precios.length; i++) {
    let precio = precios[i];
    
    if (precio < 20) {
        console.log("Producto económico");
    } else if (precio >= 20 && precio <= 50) {
        console.log("Producto de precio moderado");
    } else if (precio > 50) {
        console.log("Producto de lujo");
    }
}