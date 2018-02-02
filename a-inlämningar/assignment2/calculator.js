// -------------------------------------------------------------
//  metod för backspace == att ta bort det sist inmatade tecknet
// -------------------------------------------------------------

function backSpace(){
  var input = document.getElementById("display").value;
  var change = input.slice(0, -1);
  document.getElementById("display").value = change;
}

// -------------------------------------------------------------
//  metod för att hantera division by zero == genererar ett eget felmeddelande istället för Infinity.
// -------------------------------------------------------------

function equalControl() {

  var input = document.getElementById("display").value;
  var result = eval(input);
  //console.log(result);
    
  if (result == "Infinity") {
    result = "Division med 0 otillåtet"
  }
  document.getElementById("display").value = result;
}