/**
 * LES TABLEAUX MULTI-DIMENSIONNELS
 * -
 * Exercice 2
 */

// Main
var p1 = ["Tya", 21, false];
var p2 = ["Milo", 30, true];
var p3 = ["Lili", 15, false];
var persos = [p1, p2, p3];

afficherLesPersos(persos);

// Fonctions
function afficherLesPersos(tab) {
  for (var cpt = 0; cpt < tab.length; cpt++) {
    afficherLignesSeparation(1, 12, "*");
    console.log("Perso %d :", cpt + 1);
    afficherUnePerso(tab[cpt]);
  }
}

function afficherUnePerso(tab) {
  console.log("Nom : %s", tab[0]);
  console.log("Âge : %d", tab[1]);
  console.log("Sexe : " + (tab[2] ? "Homme" : "Femme"));
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
