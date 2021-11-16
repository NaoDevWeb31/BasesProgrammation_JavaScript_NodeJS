/**
 * SWITCH
 * —
 * Exercice 1
 */

var readline = require("readline-sync");

var moisEnLettre = readline.question(
  "Saisir un mois de l'année (en lettte) : "
);
var txt = "Le mois de " + moisEnLettre + " correspond à ";

switch (moisEnLettre) {
  case "Janvier":
  case "janvier":
    console.log(txt + "1");
    break;
  case "Février":
  case "février":
    console.log(txt + "2");
    break;
  case "Mars":
  case "mars":
    console.log(txt + "3");
    break;
  case "Avril":
  case "avril":
    console.log(txt + "4");
    break;
  case "Mai":
  case "mai":
    console.log(txt + "5");
    break;
  case "Juin":
  case "juin":
    console.log(txt + "6");
    break;
  case "Juillet":
  case "juillet":
    console.log(txt + "7");
    break;
  case "Août":
  case "août":
    console.log(txt + "8");
    break;
  case "Septembre":
  case "septembre":
    console.log(txt + "9");
    break;
  case "Octobre":
  case "octobre":
    console.log(txt + "10");
    break;
  case "Novembre":
  case "novembre":
    console.log(txt + "11");
    break;
  case "Décembre":
  case "décembre":
    console.log(txt + "12");
    break;
  default:
    console.log("Mois inexistant");
    break;
}

var moisEnChiffre = readline.questionInt(
  "Saisir un mois de l'année (en chiffre) : "
);
var msg = "Le mois " + moisEnChiffre + " correspond au mois de ";
switch (moisEnChiffre) {
  case 1:
    console.log(msg + "Janvier");
    break;
  case 2:
    console.log(msg + "Février");
    break;
  case 3:
    console.log(msg + "Mars");
    break;
  case 4:
    console.log(msg + "Avril");
    break;
  case 5:
    console.log(msg + "Mai");
    break;
  case 6:
    console.log(msg + "Juin");
    break;
  case 7:
    console.log(msg + "Juillet");
    break;
  case 8:
    console.log(msg + "Août");
    break;
  case 9:
    console.log(msg + "Septembre");
    break;
  case 10:
    console.log(msg + "Octobre");
    break;
  case 11:
    console.log(msg + "Novembre");
    break;
  case 12:
    console.log(msg + "Décembre");
    break;
  default:
    console.log("Mois inexistant");
    break;
}
