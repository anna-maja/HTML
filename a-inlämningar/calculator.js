// exempel för inspiration:
// (fast det förutsätter en känd array vilket inte displayen är)
/*
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
    fruits.pop();
    document.getElementById("demo").innerHTML = fruits;
}
*/
// ---------------------------

/* .pop() tar bort sista elementet i en array, men displayens innehåll är väl en sträng?
*/
function backspace() {
  var show = calculator.display.value;
  show.pop();
  document.getElementById("kontroll").innerHTML = show;
}
// ---------------------------

/* slice borde ta bort sista elementet i den string som finns i displayen.
Resten borde behållas.
 */
function backa(){ 
    value = calculator.display.value.slice(0, -1);
    return value;
}
// ---------------------------

/* Tänker att try-catch skulle kunna fånga upp felinmatningar, men är inte säker på hur.
*/
function check() {
  try {
    adddlert("Welcome guest!");
  } catch (err) {
    document.getElementById("demo").innerHTML = err.name + "<br>" + err.message;
  }
}
