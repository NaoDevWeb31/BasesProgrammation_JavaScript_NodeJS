/**
 * LES TESTS
 * —
 * Exercice 7
 */

var readline = require("readline-sync");

var classe = readline.question("Saisir la classe de l'élève (Entre A et F) : ");

if (classe === "A" || classe === "B" || classe === "a" || classe === "b") {
  console.log("Numéro 1");
} else if (classe === "C" || classe === "D" || classe === "c" || classe === "d") {
  console.log("Numéro 2");
} else if (classe === "E" || classe === "F" || classe === "e" || classe === "f") {
  console.log("Numéro 3");
} else {
  console.log("Classe inconnue");
}