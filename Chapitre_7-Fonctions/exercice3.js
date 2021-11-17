/**
 * LES FONCTIONS
 * -
 * Exercice 3
 */

// Main
var readline = require("readline-sync");

verifierParite(2);
verifierParite(3);
verifierParite(4);
verifierParite(5);

console.log("----------------------------------------------");

var nbSaisi = readline.questionInt(
  "Saisir un nombre pour vérifier sa parité : "
);
verifierParite(nbSaisi);

// Fonction
function verifierParite(nombre) {
  if (nombre % 2 === 0) {
    console.log("Le nombre %d est pair", nombre);
  } else {
    console.log("Le nombre %d est impair", nombre);
  }
}
