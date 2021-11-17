/**
 * LES BOUCLES
 * —
 * Exercice 2
 */

var readline = require("readline-sync");

var tableDeMultiplication = readline.questionInt(
  "Choisir une table de multiplication : "
);

console.log("▼▽▼▽▼▽▼▽▼▽▼▽▼▽▼▽▼▽▼▽▼▽▼▽▼▽▼▽▼▽▼▽▼▽▼▽▼▽▼▽");

for (let cpt = 10; cpt >= 1; cpt--) {
  var resultat = cpt * tableDeMultiplication;
  console.log(cpt + " * " + tableDeMultiplication + " = " + resultat);
}
