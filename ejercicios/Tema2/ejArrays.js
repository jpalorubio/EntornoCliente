//     1. Crea un programa que pida al usuario 6 números y luego los muestre en orden inverso (pista: usa
//     un array para almacenarlos y "for" para mostrarlos).
// let miarray = [];
// rdo = "Resultado Normal \n";

// for (let i = 0; i < 6; i++) {
//   miarray.push(prompt("Introduce un numero"));
//   rdo += miarray[i] + "\n";
// }
// rdo += "Resultado Inverso \n";
// for (let i = miarray.length - 1; i >= 0; i--) {
//   rdo += miarray[i] + "\n";
// }
// alert(rdo);

//     2. Crea un programa que pregunte al usuario cuantos números va a introducir (por ejemplo, 5), le
//     pida todos esos números, los guarde en un array y finalmente calcule y muestre la media de esos
//     números.

// let num = parseInt(prompt("Cuantos numeros vas a introducir"));
// let miArray = [];
// let sumaN = 0;
// let rdo = "Mis numeros:\n";
// for (let i = 0; i < num; i++) {
//   miArray.push(prompt("Introduce un numero"));
//   sumaN += parseInt(miArray[i]);
//   rdo += miArray[i] + "\n";
// }
// let media = parseInt(sumaN / num);
// rdo += "La suma de mis numeros es: " + sumaN + "\n La media es: " + media;
// alert(rdo);

//     3. Crea un array de 100 elementos. El valor del primer elemento será 1, valor del segundo elemento
//     será 2, y así sucesivamente, de tal forma que el último elemento del array tendrá el valor 100.
//     Calcula la media de todos los elementos del array.

// let miArray = [];
// let sumaN = 0;
// let rdo = "Mis numeros:\n";
// for (let i = 1; i <= 100; i++) {
//   miArray.push(i);
//   sumaN += parseInt(i);
//   rdo += i + "\n";
// }
// let media = parseFloat(sumaN / 100);
// rdo += "La suma de mis numeros es: " + sumaN + "\n La media es: " + media;
// alert(rdo);

//     4. Un programa que pida al usuario 10 números, calcule su media y luego muestre los que están por
//     encima de la media.

// let miArray = [];
// let sumaN = 0;
// let rdo = "Mis numeros:\n";
// for (let i = 0; i < 10; i++) {
//   //siempre poner i=0 porque si empezamos con i=1 no accede bien a la posicion del array.
//   miArray.push(parseInt(prompt("Introduce un numero")));
//   sumaN += miArray[i];
//   rdo += miArray[i] + "\n";
// }
// let media = parseFloat(sumaN / 10);
// rdo +=
//   "La suma de mis numeros es: " +
//   sumaN +
//   "\n La media es: " +
//   media +
//   "\n Los numeros mayores que la media son: \n";

// for (let i = 1; i <= 10; i++) {
//   if (miArray[i] > media) {
//     rdo += miArray[i] + "\n";
//   }
// }

// alert(rdo);

//     5. Desarrolla un programa que pedirá nombres al usuario hasta que se introduzca un nombre vacío,
//     momento en el que dejarán de pedirse más nombres y se mostrará en pantalla la lista de los
//     nombres que se han introducido ordenados alfabéticamente.

// let bandera = false;
// let miArray = [];

// while (!bandera) {
//   let nombre = prompt("Introduce un nombre");
//   if (nombre == "") {
//     bandera = true;
//   } else {
//     miArray.push(nombre);
//   }
// }
// let rdo = "Lista de nombre: \n";
// miArray.sort();
// for (i = 0; i < miArray.length; i++) {
//   rdo += miArray[i] + "\n";
// }

// alert(rdo);

// Escribe un script para generar un array de dos dimensiones (matriz). Se le pedirá al usuario
// primero el tamaño de la matriz (que será cuadrada):
function crearTabla() {
  let tamaño = parseInt(prompt("Introduce el tamaño de la matriz cuadrada"));
  let rdo = "<table border=1>";
  for (let filas = 1; filas <= tamaño; filas++) {
    rdo += "<tr>";
    for (let columnas = 1; columnas <= tamaño; columnas++) {
      let valor = prompt(
        "Introduce el valor para la fila " + filas + " y la columna " + columnas
      );
      rdo += "<td>&nbsp;&nbsp;" + valor + "&nbsp;&nbsp;</td>";
    }
    rdo += "</tr>";
  }
  rdo += "</table>";

  document.getElementById("tabla").innerHTML = rdo;
}
