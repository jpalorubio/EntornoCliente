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
  let rdo = "<table><tr><td>&nbsp;&nbsp;</td>";

  for (let col = 1; col <= 7; col++) {
    rdo += "<td>" + String.fromCharCode(letraascii++) + "</td>";
  }
  rdo += "</tr>";
  for (let filas = 1; filas <= 8; filas++) {
    rdo += "<tr>";
    for (let columnas = 1; columnas <= 8; columnas++) {
      if (columnas == 1) {
        rdo += "<td>" + filas + "</td>";
      } else {
        rdo += "<td></td>";
      }
    }
    rdo += "</tr>";
  }

  rdo += "</table>";

  document.getElementById("tabla").innerHTML = rdo;
}
