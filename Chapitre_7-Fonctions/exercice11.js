/**
 * LES FONCTIONS
 * -
 * Exercice 11
 */

// Main
var readline = require("readline-sync");

do {
  afficherMenu();

  var choixMenu = readline.questionInt("Quel est votre choix ? ");

  switch (choixMenu) {
    case 1:
      afficherLignesSeparation(1, 1, "        —— 𝟏 ——        ");
      console.log("Calcul de la Factorielle");
      afficherLignesSeparation(1, 20, "-");
      var saisieFactorielle = readline.questionInt("Quel nombre voulez-vous ? ");
      var factorielle = calculerFactorielle(saisieFactorielle);
      console.log("Le résultat de !%d est : %d", saisieFactorielle, factorielle);
      break;
    case 2:
      afficherLignesSeparation(1, 1, "     —— 𝟐 ——     ");
      console.log("Calcul de la Somme");
      afficherLignesSeparation(1, 20, "-");
      var saisieSomme = readline.questionInt("Quel nombre voulez-vous ? ");
      var somme = calculerSomme(saisieSomme);
      console.log("Le résultat de la somme des %d premiers nombres est : %d", saisieSomme, somme);
      break;
    case 3:
      console.log("À +");
      afficherLignesSeparation(1, 56, "*");
      break;
    default:
      console.log("Je n'ai pas compris, réessayer");
      break;
  }
} while (choixMenu !== 3);

// Fonctions
function afficherMenu() {
  var menu = "1/ Factorielle\n";
  menu += "2/ Somme\n";
  menu += "3/ Quitter";
  afficherLignesSeparation(1, 20, "*");
  console.log(menu);
  afficherLignesSeparation(1, 20, "*");
}

function calculerFactorielle(factorielle) {
  var resultatFactorielle = 1;
  for (var cpt = 1; cpt <= factorielle; cpt++) {
    resultatFactorielle *= cpt;
  }
  return resultatFactorielle;
}

function calculerSomme(nombre) {
  var resultatSomme = 0;
  for (var cpt = 1; cpt <= nombre; cpt++) {
    resultatSomme += cpt;
  }
  return resultatSomme;
}

function creerLigneSeparation(nbSymboles, symbole) {
  var caractere = "";
  for (var cpt = 1; cpt <= nbSymboles; cpt++) {
    caractere += symbole;
  }
  console.log(caractere);
}

function afficherLignesSeparation(nbLignes, nbSymboles, symbole) {
  for (let cpt1 = 1; cpt1 <= nbLignes; cpt1++) {
    creerLigneSeparation(nbSymboles, symbole);
  }
}
