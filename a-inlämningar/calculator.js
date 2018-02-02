/*

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
    fruits.pop();
    document.getElementById("demo").innerHTML = fruits;
}
*/

function backspace() {
  var show = calculator.display.value;
  show.pop();
  document.getElementById("kontroll").innerHTML = show;
}

function check() {
  try {
    adddlert("Welcome guest!");
  } catch (err) {
    document.getElementById("demo").innerHTML = err.name + "<br>" + err.message;
  }
}
