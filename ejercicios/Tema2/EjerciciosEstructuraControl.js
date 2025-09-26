// 1. Crea un programa que pida al usuario un número y diga si es par.

// let n1 = parseInt(prompt("Introduce un numero"))
// if (nej1 % 2 == 0) {
//   alert(nej1 + " es par");
// } else {
//   alert(nej1 + " no es par");
// }

// 2. Crea un programa que pida al usuario dos números y diga cuál es el mayor de ellos.

// let n1 = parseInt(prompt("Introduce un numero"));
// let n2 = parseInt(prompt("Introduce otro numero"));

// if (n1 > n2) {
//   alert(n1 + " es mayor que " + n2);
// } else {
//   if (n1 == n2) {
//     alert(n1 + " es igual a " + n2);
//   } else {
//     alert(n2 + " es mayor que " + n1);
//   }
// }

// 3. Crea un programa que pida al usuario dos números y diga si el primero es múltiplo del segundo.

// let n1 = parseInt(prompt("Introduce un numero"));
// let n2 = parseInt(prompt("Introduce otro numero"));

// if (n1 % n2 == 0) {
//   alert(n1 + " es multiplo del " + n2);
// } else {
//   alert(n1 + " NO es multiplo del " + n2);
// }

// 4. Crea un programa que pida al usuario dos números. Si el segundo no es cero, mostrará el
// resultado de dividir el primero entre el segundo. Por el contrario, si el segundo número es cero,
// escribirá "Error: No se puede dividir entre cero".

// let n1 = parseInt(prompt("Introduce un numero"));
// let n2 = parseInt(prompt("Introduce otro numero"));

// if (n2 == 0) {
//   alert("Error: No se puede divir entre cero");
// } else {
//   let division = n1 / n2;
//   alert(n1 + "/" + n2 + " es igual a " + division);
// }

// 5. Crea un programa que pida al usuario dos números y diga si son iguales o, en caso contrario,
// cuál es el mayor de ellos.

// let n1 = parseInt(prompt("Introduce un numero"));
// let n2 = parseInt(prompt("Introduce otro numero"));

// if (n1 == n2) {
//   alert("Son iguales");
// } else {
//   if (n1 > n2) {
//     alert(n1 + " es mayor que " + n2);
//   } else {
//     alert(n2 + " es mayor que " + n1);
//   }
// }

// 6. Necesitamos un programa que muestre los números del 10 al 20, ambos inclusive. Y a
// continuación, muestre los números del 20 al 10, es decir, de mayor a menor.

// let rdo1 = "";
// for (i = 10; i <= 20; i++) {
// rdo1 += i;
// rdo1 += "\n";
//}

// let rdo = "";
// for (i = 20; i >= 10; i--) {
//   rdo += i;
//   rdo += "\n";
// }
// alert(rdo);

// 7. Crea un programa que escriba en pantalla los números del 1 al 50 que sean múltiplos de 3.

// let rdo = "";
// for (i = 1; i <= 50; i++) {
//   if (i % 3 == 0) {
//     rdo += i;
//     rdo += "\n";
//   }
// }
// alert(rdo);

// 8. Crea un programa que muestre los números del 100 al 200 (ambos incluidos) que sean divisibles
// entre 7 y a la vez entre 3.

// let rdo = "";
// for (i = 100; i <= 200; i++) {
//   if (i % 3 == 0 && i % 7 == 0) {
//     rdo += i;
//     rdo += "\n";
//   }
// }
// alert(rdo);

// 9. Crea un programa que muestre la tabla de multiplicar del 9:
// 9 x 0 = 0
// 9 x 1 = 9
// 9 x 2 = 18
// …
// 9 x 10 = 90

// let rdo = "";
// for (i = 1; i <= 10; i++) {
//   rdo += "9 x " + i + " = " + 9 * i;
//   rdo += "\n";
// }
// alert(rdo);

// 10. Crea un programa que muestre los primeros ocho números pares: 2 4 6 8 10 12 14 16.
// let rdo = "";
// for (i = 2; i <= 16; i = i + 2) {
//   rdo += i;
//   rdo += "\n";
// }
// alert(rdo);

// 11. Crea un programa que muestre los números del 15 al 5, descendiendo.

// let rdo = "";
// for (i = 15; i >= 5; i--) {
//   rdo += i;
//   rdo += "\n";
// }
// alert(rdo);

// 12. Crea un programa que pida al usuario el ancho (por ejemplo, 4) y el alto (por ejemplo, 3) y
// muestre un rectángulo formado por esa cantidad de asteriscos:
// ****
// ****
// ****

// let ancho = parseInt(prompt("Introduce el ancho"));
// let alto = parseInt(prompt("Introduce el alto"));
// let rdo = "";
// for (i = 1; i <= alto; i++) {
//   let linea = "";
//   for (j = 1; j <= ancho; j++) {
//     linea += "*";
//   }
//   rdo += linea;
//   rdo += "\n";
// }
// alert(rdo);

// 13. Lo mismo que el ejercicio anterior, pero esta vez mostrará una diagonal con otro carácter:
// O***
// *O**
// **O*

// let ancho = parseInt(prompt("Introduce el ancho"));
// let alto = parseInt(prompt("Introduce el alto"));
// let rdo = "";
// for (i = 1; i <= alto; i++) {
//   let linea = "";
//   for (j = 1; j <= ancho; j++) {
//     if (i == j) {
//       linea += "0";
//     } else {
//       linea += "*";
//     }
//   }

//   rdo += linea;
//   rdo += "\n";
// }
// alert(rdo);

// 14. Crea un programa que pida al usuario su identificador y contraseña de manera indefinida hasta
// que introduzca el identificador “alibaba” y la contraseña “sesamo”. Si al tercer intento no ha
// introducido los datos correctos, mostrará un mensaje diciendo que el identificador/contraseña no
// son correctos.

// let bandera = false;
// contador = 0;
// while (!bandera) {
//   let user = prompt("Introduce usuario").toLocaleLowerCase();
//   let pw = prompt("Introduce contraseña").toLocaleLowerCase();
//   if (user == "alibaba" && pw == "sesamo") {
//     alert("Contraseña correcta");
//     bandera = true;
//   } else {
//     contador++;
//   }
//   if (contador == 3) {
//     bandera = true;
//     alert("identificador/contraseña no son correctos");
//   }
// }

// 15. Crea un "calculador de cuadrados": pedirá al usuario un número y mostrará su cuadrado. Se
// repetirá mientras el número introducido no sea cero.
// let bandera = false;
// while (!bandera) {
//   let num = parseInt(prompt("Introduce un numero"));
//   if (num == 0) {
//     alert("Has introducido un 0, se cerrara el programa");
//     bandera = true;
//   } else {
//     alert("El cuadrado de " + num + " es " + num * num);
//   }
// }

// 16. Escribe un código que genere una excepción (por ejemplo, llamar a una función que no exista).
// Capturar el error y mostrar un mensaje de aviso.

// 17. Crea un programa que contenga un bucle sin fin que muestra el mensaje "Hola" con alert.
// Cuando llegue a 10 vueltas, se detendrá.

// for (let i = 1; i <= 10; i++) {
//   alert("Hola " + i);
// }

// 18. A partir del siguiente código html:
// <!DOCTYPE html><html lang="es">
// <head><meta charset="utf-8"><title>Tabla</title>
// <style> table td{ border: 1px solid #555; padding: 10px; } </style>
// <body></body></html>
// Genera el código necesario (usando dos “for” anidados) para generar esta tabla dentro del body
// (no hace falta ponerles borde a las celdas, ya lo tiene puesto en los estilos). Utiliza una cadena,
// donde se van concatenando elementos HTML.
