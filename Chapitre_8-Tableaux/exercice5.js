/**
 * LES TABLEAUX
 * -
 * Exercice 5
 */

// Main
var readline = require("readline-sync");

var tableau = [];

do {
  afficherMenu();

  var choixMenu = readline.questionInt("Quel est votre choix ? ");

  switch (choixMenu) {
    case 1:
      afficherLignesSeparation(1, 1, "       —— 𝟏 ——       ");
      console.log("Affichage du Tableau");
      afficherLignesSeparation(1, 23, "-");
      afficherTableau(tableau);
      break;
    case 2:
      afficherLignesSeparation(1, 1, "        —— 𝟐 ——        ");
      console.log("Calcul de la Moyenne");
      afficherLignesSeparation(1, 23, "-");
      var moyenne = calculerMoyenne(tableau);
      console.log("La moyenne est de : %d", moyenne.toFixed(1));
      break;
    case 3:
      afficherLignesSeparation(1, 1, "     —— 𝟑 ——     ");
      console.log("Saisie du Tableau");
      afficherLignesSeparation(1, 23, "-");
      tableau = saisirTableau();
      break;
    case 0:
      console.log("À +");
      afficherLignesSeparation(1, 56, "*");
      break;
    default:
      console.log("Cas non traité, réessayer");
      break;
  }
} while (choixMenu !== 0);

// Fonctions
function afficherMenu() {
  var menu = "1/ Afficher le tableau\n";
  menu += "2/ Calculer la moyenne\n";
  menu += "3/ Saisir un tableau\n";
  menu += "0/ Sortir";
  afficherLignesSeparation(1, 23, "*");
  console.log(menu);
  afficherLignesSeparation(1, 23, "*");
}

function afficherTableau(tab) {
  if (tab.length === 0) {
      console.log("Tableau vide !");
  } else {
    for (var cpt = 0; cpt < tab.length; cpt++) {
      console.log("Indice : %d - Valeur : %d", cpt, tab[cpt]);
    }
  }
}

function calculerMoyenne(tab) {
  var resultat = 0;
  for (var cpt = 0; cpt < tab.length; cpt++) {
    resultat += tab[cpt];
  }
  var moyenne = resultat / tab.length;
  return moyenne;
}

function saisirTableau() {
  var nbValeurs = readline.questionInt("Combien de notes voulez-vous ? ");
  var valeurs = [];
  for (var cpt = 1; cpt <= nbValeurs; cpt++) {
    valeurs.push(readline.questionInt("Saisir la note numéro " + cpt + " : "));
  }
  return valeurs;
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
