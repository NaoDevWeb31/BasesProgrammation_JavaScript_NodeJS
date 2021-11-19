/**
 * LES TABLEAUX MULTI-DIMENSIONNELS
 * -
 * Exercice 4
 */

// Main
var readline = require("readline-sync");

var p1 = ["Tya", 21, false];
var p2 = ["Milo", 30, true];
var p3 = ["Lili", 15, false];
var persos = [p1, p2, p3];

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
      console.log("Calcul de la Moyenne d'Âge");
      afficherLignesSeparation(1, 23, "-");
      var moyenneAges = calculerMoyenneAges(persos);
      console.log("La moyenne d'âge des personnages est de : %d", moyenneAges);
      break;
    case 3:
      afficherLignesSeparation(1, 1, "     —— 𝟑 ——     ");
      console.log("Ajout d'un Personnage");
      afficherLignesSeparation(1, 23, "-");
      var p = creerPerso();
      persos.push(p);
      console.log("Le personnage a été rajouté :");
      afficherUnPerso(p);
      break;
    case 4:
      afficherLignesSeparation(1, 1, "     —— 𝟒 ——     ");
      console.log("Suppression d'un Personnage");
      afficherLignesSeparation(1, 23, "-");
      supprimerDernierPerso(persos);
      break;
    case 5:
      afficherLignesSeparation(1, 1, "     —— 𝟓 ——     ");
      console.log("Affichage d'un Personnage Saisi");
      afficherLignesSeparation(1, 23, "-");
      rechercherPersoSaisi(persos);
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
  menu += "2/ Calculer de la moyenne d'âge\n";
  menu += "3/ Ajouter un personnage\n";
  menu += "4/ Supprimer un personnage\n";
  menu += "5/ Afficher un personnage saisi au clavier\n";
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
      afficherLignesSeparation(1, 12, "*");
      console.log("Perso %d :", cpt + 1);
      afficherUnPerso(tab[cpt]);
    }
  }
}

/**
 * Fonction qui permet d'afficher un personnage
 * @param {Array} tab tab : tableau des infos d'un personnage
 */
function afficherUnPerso(tab) {
  console.log("Nom : %s", tab[0]);
  console.log("Âge : %d", tab[1]);
  console.log("Sexe : " + (tab[2] ? "Homme" : "Femme"));
}

/**
 * Fonction qui permet de calculer la moyenne d'âge des personnages
 * @param {Array} tab tab : tableau de personnages
 * @return {number} retourne la moyenne d'âge
 */
function calculerMoyenneAges(tab) {
  var moyenne = 0;
  for (var cpt = 0; cpt < tab.length; cpt++) {
    // Récupérer l'âge chaque personnage
    const age = tab[cpt][1];
    moyenne += age;
  }
  return moyenne / tab.length;
}

/**
 * Fonction permettant de créer un personnage
 * @returns {Array} retourne un tableau contenant les infos d'un personnage
 */
function creerPerso() {
  var perso = [];
  var nom = readline.question("Quel est le nom ? ");
  var age = readline.questionInt("Quel est l'âge ? ");
  perso.push(nom, age);

  do {
    var sexeInt = readline.questionInt(
      "Quel est le sexe ? (1 : Homme / 2 : Femme) "
    );
  } while (sexeInt !== 1 && sexeInt !== 2);

  sexeInt === 1 ? perso.push(true) : perso.push(false);

  return perso;
}

/**
 * Fonction permettant de supprimer le dernier personnage du tableau
 * @param {Array} tab tab : tableau de personnages
 */
function supprimerDernierPerso(tab) {
  if (tab.length > 0) {
    afficherUnPerso(tab[tab.length - 1]);
    do {
      var confirmerSuppression = readline.questionInt(
        "Voulez-vous vraiment supprimer ce personnage ? (1 : oui - 2 : non) "
      );
    } while (confirmerSuppression !== 1 && confirmerSuppression !== 2);

    if (confirmerSuppression === 1) {
      tab.pop();
      console.log("Le dernier personnage ajouté a été supprimé");
    } else {
      console.log("Annulation de la suppression du dernier personnage");
    }
  } else {
    console.log("Supprimer impossible, tableau vide !");
  }
}

/**
 * Fonction permettant de rechercher dans le tableau de personnages un nom saisi
 * @param {Array} tab tab : tableau de personnages
 */
function rechercherPersoSaisi(tab) {
  var nomRecherche = readline.question("Quel est le nom recherché ? ");
  var indice = recupererPerso(nomRecherche, tab);
  if (indice !== -1) {
    afficherUnPerso(tab[indice]);
  } else {
    console.log("Personnage nommé " + nomRecherche + " inexistant !");
  }
}

/**
 * Fonction qui permet de de récupérer la position d'un personnage
 * @param {String} nomRecherche nomRecherche : nom à retrouver
 * @param {Array} tab tab : tableau de personnages
 * @returns {number} retourne l'indice du personnage recherché dans le tableau ou -1 si non trouvé
 */
function recupererPerso(nomRecherche, tab) {
  for (var cpt = 0; cpt < tab.length; cpt++) {
    const nom = tab[cpt][0];
    if (nomRecherche.toLowerCase() === nom.toLowerCase()) {
      return cpt;
    }
  }
  return -1;
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
