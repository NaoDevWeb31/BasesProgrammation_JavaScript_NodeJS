/**
 * LES FONCTIONS
 * -
 * Exercice 2
 */

// Main
var readline = require("readline-sync");

afficherLignesSeparation(1);

var prenom = "Matthieu";
direBonjour(prenom);

afficherLignesSeparation(2);

var prenomSaisi = readline.question("Quel est votre prénom ? ");
direBonjour(prenomSaisi);

afficherLignesSeparation(1);

// Fonctions
function direBonjour(pseudo) {
  console.log("Bonjour %s", pseudo);
  console.log("Hello %s", pseudo);
  console.log("Hola %s", pseudo);
}

function creerLigneSeparation() {
  var tirets = "";

  for (var cpt = 1; cpt <= 22; cpt++) {
    tirets += "-";
  }
  console.log(tirets);
}

function afficherLignesSeparation(nbLignes) {
  for (let cpt1 = 1; cpt1 <= nbLignes; cpt1++) {
    creerLigneSeparation();
  }
}
