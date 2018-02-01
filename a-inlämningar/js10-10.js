/*
Skapa en JavaScript-funktion som visar multiplikationstabellen enligt bilden nedan.
Placera funktionen i en separat JS-fil. Testa funktionen i ett HTML-dokument.

*/

function tio(table) {
  var table = "<table>";

  for (x = 1; x <= 10; x++) {

    table += "<tr>";
    for (y = 1; y <= 10; y++) {
      table += "<td>";
      table += x * y;
      table += "</td>";
    }
    table += "</tr>";
  }
  table += "</table>";
  return table;
}
