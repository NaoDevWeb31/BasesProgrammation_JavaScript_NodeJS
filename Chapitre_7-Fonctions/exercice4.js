/**
 * LES FONCTIONS
 * -
 * Exercice 4
 */

// Main
var readline = require("readline-sync");

afficherLignesSeparation(1);

direBonjour("Matthieu", "FR");

afficherLignesSeparation(1);

direBonjour("Tya", "ES");

afficherLignesSeparation(1);

direBonjour("Milo", "EN");

afficherLignesSeparation(2);

var prenomSaisi = readline.question("Quel est votre prénom ? ");
var langueSaisie = readline.question("Quelle est la langue (FR / EN / EN) ? ");
direBonjour(prenomSaisi, langueSaisie);

afficherLignesSeparation(1);

// Fonction
function direBonjour(pseudo, langue) {
  switch (langue.toLowerCase()) {
    case "fr":
      console.log("Bonjour %s", pseudo);
      break;
    case "en":
      console.log("Hello %s", pseudo);
      break;
    case "es":
      console.log("Hola %s", pseudo);
      break;
    default:
      console.log("Cas non pris en compte");
      break;
  }
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
