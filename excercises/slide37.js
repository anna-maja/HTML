/*
ARBETA MED FUNKTIONER
Skapa en ny fil med namnet funktioner.js
Skriv följande funktion i filen
function moms25(pris) {
return pris * 1.25; 
// KLART!!!
} 
ANROPA FUNKTIONER
<script src="funktioner.js"></script>
<p id="demo"></p>
<script>
var pris = 100;
var el = document.getElementById('demo');
el.innerHTML = moms25(pris);
</script>

Övningar
1. Lägg till två funktioner
som beräknar momssatserna 12% och 6%
2. Kan du lösa detta med en funktion 
istället för tre?

*/

function moms25(pris) {
    return pris*1.25;
}

function moms12(pris) {
    return pris * 1.12;
}

function moms6(pris) {
    return pris * 1.06;
}

function momsAlla(pris) {
    return "25% moms ger " + (pris*1.25) +
    ", 12% moms ger " + (pris * 1.12) + 
    " och 6% moms ger " + (pris * 1.06);
}
/* Jag lyckas inte få till att anropa som jag vill, men nåt gör jag ju rätt.
*/