/*

<p id="demo">Hej </p>
<script>
var namn=prompt("Vad heter du?");
document.getElementById('demo').innerHTML += namn;
</script>
58
ÖVNING
Skapa ett skript som läser in två godtyckliga tal via inmatningsfält (prompt).
Multiplicera dessa tal och visa resultatet.
*/

function multiply(tal1, tal2) {
    var sum = tal1*tal2;
    return sum;
}