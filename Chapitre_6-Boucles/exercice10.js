/**
 * LES BOUCLES
 * —
 * Exercice 10
 */

var readline = require("readline-sync");

do {
  var menu = "***************** Menu *****************\n";
  menu += "1/ Bonjour\n";
  menu += "2/ Salut\n";
  menu += "3/ Coucou\n";
  menu += "0/ Quitter\n";
  menu += "****************************************";
  console.log(menu);

  var saisie = readline.questionInt(
    "Choisir le message à afficher entre 1 et 3 : "
  );

  console.log("********************");

  switch (saisie) {
    case 1:
      console.log("Bonjour");
      break;
    case 2:
      console.log("Salut");
      break;
    case 3:
      console.log("Coucou");
      break;
    case 0:
      console.log("À plus !");
      break;
    default:
      console.log("Cas non pris en compte, recommencez !");
      break;
  }
  console.log("****************************************");
} while (saisie !== 0);
