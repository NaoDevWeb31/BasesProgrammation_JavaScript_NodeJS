/**
 * LES BOUCLES
 * —
 * Exercice 4
 */

var readline = require("readline-sync");

var factorielle = readline.questionInt("Choisir la factorielle à calculer : ");

var resultat = 1;

for (var cpt = 1; cpt <= factorielle; cpt++) {
  resultat *= cpt;

  var msg = "";
  msg += cpt;

  if (cpt === 1) {
    msg += "er ";
  } else {
    msg += "ème ";
  }

  msg += "passage - total = " + resultat;

  console.log(msg);
}
