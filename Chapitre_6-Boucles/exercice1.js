/**
 * LES BOUCLES
 * —
 * Exercice 1
 */

var readline = require("readline-sync");

var tableDeMultiplication = readline.questionInt(
  "Choisir une table de multiplication : "
);

console.log("▼▽▼▽▼▽▼▽▼▽▼▽▼▽▼▽▼▽▼▽▼▽▼▽▼▽▼▽▼▽▼▽▼▽▼▽▼▽▼▽");

for (let cpt = 1; cpt <= 10; cpt++) {
  var resultat = cpt * tableDeMultiplication;
  console.log(cpt + " * " + tableDeMultiplication + " = " + resultat);
}
