/**
 * LES BOUCLES
 * —
 * Exercice 9
 */

var readline = require("readline-sync");

var factorielle = readline.questionInt("Quel nombre voulez-vous ? ");

var resultat = 1;
var cpt = 1;

while (resultat <= factorielle) {
  resultat *= cpt;
  cpt++;
  console.log(cpt + "ème passage - total = " + resultat);
}
