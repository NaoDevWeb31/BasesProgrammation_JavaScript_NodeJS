/**
 * LES TABLEAUX
 * -
 * Exercice 3
 */

// Main
var readline = require("readline-sync");

var nbNotes = readline.questionInt("Combien de notes voulez-vous ? ");
var notes = [];
for (var cpt = 1; cpt <= nbNotes; cpt++) {
  notes.push(readline.questionInt("Saisir la note numéro " + cpt + " : "));
}
console.log(notes); // afficher le tableau de notes

console.log("La moyenne est de : %d", calculerMoyenne(notes).toFixed(1));

// Fonctions
function calculerMoyenne(tab) {
  var resultat = 0;
  for (var cpt = 0; cpt < tab.length; cpt++) {
    resultat += tab[cpt];
  }
  var moyenne = resultat / tab.length;
  return moyenne;
}
