/**
 * SWITCH
 * —
 * Exercice 3
 */

var readline = require("readline-sync");

var menu = "1/ Ajouter un joueur\n";
menu += "2/ Modifier un joueur\n";
menu += "3/ Supprimer un joueur\n";
menu += "0/ Quitter le programme";
console.log(menu);

var saisie = readline.questionInt("Quel est votre choix ? ");
switch (saisie) {
  case 1:
    console.log("Vous avez sélectionné l'ajout d'un joueur");
    break;
  case 2:
    console.log("Vous avez sélectionné la modification d'un joueur");
    break;
  case 3:
    console.log("Vous avez sélectionné la suppression d'un joueur");
    break;
  case 0:
    console.log("À bientôt !");
    break;
  default:
    console.log("Cas inexistant");
    break;
}
