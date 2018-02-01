/*
var x = 1;
while (x <= 10) {
for (y = 1; y <= 10; y++) {
document.write(y, " &times; ", x, "=", y * x, "<br>");
}
document.write("<br>");
x++;
}
71
ÖVNING 1
Skapa ett skript som visar femmans
multiplikationstabell i en HTML-tabell
*/
/*
En for-loop, som för varje varv 
skapar en tr
skapar en td
i * 5
stänger td
stänger tr
*/
function femman(table) {

  var table = "<table>";
  
  
  for (i = 0; i <= 10; i++) {

    table += "<tr>";
    table += "<td>";
    table += i + " * 5 = " + i*5;
    table += "</td>";
    table += "</tr>";

  }
  table += "</table>";
  return table;
}
