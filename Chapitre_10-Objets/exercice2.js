/**
 * LES OBJETS
 * -
 * Exercice 2
 */

// Classe
class Perso {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }
}

// Main
var readline = require("readline-sync");
var persos = [];

do {
  afficherMenu();

  var choixMenu = readline.questionInt("Quel est votre choix ? ");

  switch (choixMenu) {
    case 1:
      afficherLignesSeparation(1, 1, "       —— 𝟏 ——       ");
      console.log("Affichage des Personnages");
      afficherLignesSeparation(1, 23, "-");
      afficherLesPersos(persos);
      break;
    case 2:
      afficherLignesSeparation(1, 1, "        —— 𝟐 ——        ");
      console.log("Ajout d'un Personnage");
      afficherLignesSeparation(1, 23, "-");
      var p = creerPerso();
      persos.push(p);
      break;
    case 0:
      console.log("À +");
      afficherLignesSeparation(1, 40, "*");
      break;
    default:
      console.log("Cas non traité, réessayer");
      break;
  }
} while (choixMenu !== 0);

// Fonctions
/**
 * Fonction permettant d'afficher le menu
 */
function afficherMenu() {
  var menu = "1/ Afficher les personnages\n";
  menu += "2/ Ajouter un personnage\n";
  menu += "0/ Quitter";
  afficherLignesSeparation(1, 40, "*");
  console.log(menu);
  afficherLignesSeparation(1, 40, "*");
}

/**
 * Fonction qui permet d'afficher une liste de personnages
 * @param {Array} tab tab : tableau de personnages
 */
function afficherLesPersos(tab) {
  if (tab.length === 0) {
    console.log("Tableau vide !");
  } else {
    for (var cpt = 0; cpt < tab.length; cpt++) {
      if (cpt > 0) {
        afficherLignesSeparation(1, 12, "*");
      }
      afficherUnPerso(tab[cpt]);
    }
  }
}

/**
 * Fonction qui permet d'afficher un personnage
 * @param {Object} personnage personnage : objet contenant les infos d'un personnage
 */
function afficherUnPerso(personnage) {
  for (var info in personnage) {
    console.log(motPremierLettreEnMajuscule(info) + " : " + personnage[info]);
  }
}

/**
 * Fonction permettant de mettre la première lettre du mot en majuscule
 * @param {String} mot mot : mot à styliser
 * @returns retourne le mot
 */
function motPremierLettreEnMajuscule(mot) {
  return mot.charAt(0).toUpperCase() + mot.slice(1);
}

/**
 * Fonction permettant de créer un personnage
 * @returns {Object} retourne un objet contenant les infos d'un personnage
 */
function creerPerso() {
  var nom = readline.question("Quel est le nom ? ");
  var age = readline.questionInt("Quel est l'âge ? ");
  var perso = new Perso(nom, age);
  return perso;
}

/**
 * Fonction permettant de former une ligne de symbole
 * @param {Number} nbSymboles nbSymboles : nombre de symboles choisi pour former la ligne
 * @param {String} symbole symbole : symbole choisi pour former la ligne
 */
function creerLigneSeparation(nbSymboles, symbole) {
  var caractere = "";
  for (var cpt = 1; cpt <= nbSymboles; cpt++) {
    caractere += symbole;
  }
  console.log(caractere);
}

/**
 * Fonction permettant de créer un nombre choisi de ligne de séparation
 * @param {Number} nbLignes nbLignes : nombre choisi de lignes à créer
 * @param {Number} nbSymboles nbSymboles : nombre de symboles choisi pour créer la ligne
 * @param {String} symbole symbole : symbole choisi pour créer la ligne
 */
function afficherLignesSeparation(nbLignes, nbSymboles, symbole) {
  for (let cpt1 = 1; cpt1 <= nbLignes; cpt1++) {
    creerLigneSeparation(nbSymboles, symbole);
  }
}
