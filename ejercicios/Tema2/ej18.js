// 18. A partir del siguiente código html:
// <!DOCTYPE html><html lang="es">
// <head><meta charset="utf-8"><title>Tabla</title>
// <style> table td{ border: 1px solid #555; padding: 10px; } </style>
// <body></body></html>
// Genera el código necesario (usando dos “for” anidados) para generar esta tabla dentro del body
// (no hace falta ponerles borde a las celdas, ya lo tiene puesto en los estilos). Utiliza una cadena,
// donde se van concatenando elementos HTML.

//tr son las filas.
//td los cuadritos de cada fila.
function crearTabla() {
  let letraascii = 65;
  let rdo = "<table><tr><td></td>";

  for (let col = 1; col <= 7; col++) {
    rdo += "<td>" + String.fromCharCode(letraascii++) + "</td>";
    // for (let j = 1; i <= 8; j++) {
    //   rdo += "<tr>" + j + "</tr>";
    // }
  }

  rdo += "<tr></table>";

  document.getElementById("tabla").innerHTML = rdo;
}
