/**
 * LES TABLEAUX
 * -
 * Exercice 4
 */

// Main
var readline = require("readline-sync");

var nombreSaisi = readline.questionInt("Quel nombre voulez-vous ? ");
var tab = [4, 8, 12, 16];

var estDivisible = verifierPariteTableau(tab, nombreSaisi);
if (estDivisible) {
  console.log("Le tableau contient que des valeurs divisibles par %d", nombreSaisi);
} else {
  console.log("Le tableau ne contient pas que des valeurs divisibles par %d", nombreSaisi);
}

// Fonction
function verifierPariteTableau(tab, diviseur) {
  for (var cpt = 0; cpt < tab.length; cpt++) {
    if (tab[cpt] % diviseur !== 0) {
      return false;
    }
  }
  return true;
}
