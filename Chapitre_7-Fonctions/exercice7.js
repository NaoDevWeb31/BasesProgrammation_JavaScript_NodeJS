/**
 * LES FONCTIONS
 * -
 * Exercice 7
 */

// Main
var readline = require("readline-sync");

var nbSaisi1 = readline.questionInt("Premier nombre : ");
var nbSaisi2 = readline.questionInt("Deuxième nombre : ");
var nbSaisi3 = readline.questionInt("Troisième nombre : ");
var nbSaisi4 = readline.questionInt("Quatrième nombre : ");

var moy = calculerMoyenne(nbSaisi1, nbSaisi2, nbSaisi3, nbSaisi4);
console.log("La moyenne des 4 nombres saisis au clavier est de : " + moy);

// Fonction
function calculerMoyenne(nb1, nb2, nb3, nb4) {
  return (nb1 + nb2 + nb3 + nb4) / 4;
}
