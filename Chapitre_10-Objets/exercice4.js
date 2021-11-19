/**
 * LES OBJETS
 * -
 * Exercice 4
 */

var readline = require("readline-sync");
var parc = require("./parc/gestionVoitures"); // import du module gestionVoitures

do {
  afficherMenu();
  var choixMenu = readline.questionInt("Quel est votre choix ? ");
  switch (choixMenu) {
    case 1:
      parc.afficherParc();
      break;
    case 2:
      parc.afficherVoitures();
      break;
    case 3:
      parc.modifParc();
      break;
    case 0:
      console.log("À +");
      break;
    default:
      console.log("Cas non pris en compte, recommencer");
      break;
  }
} while (choixMenu !== 0);

/**
 * Fonction permettant d'afficher le menu
 */
function afficherMenu() {
  var menu = "****************************************************\n";
  menu += "1/ Afficher le parc\n";
  menu += "2/ Afficher les voitures\n";
  menu += "3/ Modifier les informations du parc\n";
  menu += "0/ Quitter\n";
  menu += "**************************************************************";
  console.log(menu);
}
