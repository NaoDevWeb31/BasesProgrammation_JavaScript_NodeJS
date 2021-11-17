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

  if (cpt === 1) {
    console.log(cpt + "er passage - total = " + resultat);
  } else {
    console.log(cpt + "ème passage - total = " + resultat);
  }
}
