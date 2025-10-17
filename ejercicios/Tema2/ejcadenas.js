// Actividad 1 - Cadenas
// 1.Crear una función que pida una cadena por teclado y muestre su tamaño

function mostrarTamaño() {
  let cadena1 = prompt("Introduce una cadena");
  let posicion = cadena1.length;
  let rdo = "<h1>Tamaño de la cadena: " + cadena1 + " es " + posicion + "</h2>";
  document.getElementById("resultadoej1").innerHTML = rdo;
}
// 2. Crea una función que pida la clave Secreta por pantalla, si la introduce correctamente aparece el
// mensaje “Has acertado” (también serán válidas: secreta, SECRETA, SeCrEtA...)

function pedirClave() {
  let claveSecreta = prompt("Introduce la clave");
  let rdo = "<h1>";
  if (claveSecreta.toLocaleLowerCase() == "secreta") {
    rdo += "Clave correcta </h1>";
  } else {
    rdo += "Clave incorrecta </h1>";
  }
  document.getElementById("resultadoej2").innerHTML = rdo;
}

// 3. Crea una función que recorra una cadena y separe los caracteres con un guión (Que no aparezca guión
// al final)
function recorrerCadena() {
  let cadena2 = prompt("Introduce una cadena");
  let tamaño = cadena2.length;
  let rdo = "<h1>";

  for (i = 0; i < cadena2.length; i++) {
    if (cadena2.charAt(i) == 0) {
      rdo += "-";
    } else {
      rdo += cadena2.charAt(i);
    }
  }
  rdo += "</h1>";

  document.getElementById("resultadoej3").innerHTML = rdo;
}

// Actividad 2 – Cadenas
// 1. Función que defina una variable cadena con "hola que tal yo bien" y busque "tal" para mostrar la cadena
// desde "tal" al final.

function parteCadena() {
  let mensaje = "hola que tal yo bien";
  let posicion = mensaje.indexOf("tal"); // posición = 9 (donde empieza la cadena tal)
  let porcion = mensaje.substring(posicion); // porcion = "la Mundo"
  let rdo =
    "<h1>Hola que tal yo bien a partir de la palabra tal que daria asi: " +
    porcion +
    "</h1>";

  document.getElementById("resultadoej4").innerHTML = rdo;
}

// 2. Función que defina una cadena, la corte y la meta en un array. Luego debe recorrer el array e indicar
// que en el índice X del array está tal cadena.
