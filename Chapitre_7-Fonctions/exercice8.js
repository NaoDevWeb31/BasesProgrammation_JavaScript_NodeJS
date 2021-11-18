/**
 * LES FONCTIONS
 * -
 * Exercice 8
 */

// Main
var readline = require("readline-sync");

var nbSaisi = readline.questionInt("Nombre à diviser : ");
var diviseurSaisi = readline.questionInt("Le diviseur : ");

if (verifierParite(nbSaisi, diviseurSaisi)) {
  console.log("Le nombre " + nbSaisi + " est divisible par " + diviseurSaisi);
} else {
  var reste = nbSaisi % diviseurSaisi;
  console.log( "Le nombre " + nbSaisi + " n'est pas divisible par " + diviseurSaisi + " car le reste est de " + reste);
}

// Fonction
function verifierParite(nombre, diviseur) {
  return nombre % diviseur === 0;
}
