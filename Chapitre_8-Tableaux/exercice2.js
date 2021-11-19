/**
 * LES TABLEAUX
 * -
 * Exercice 2
 */

var notes = [5, 12, 18, 13, 14, 10, 7, 15];

var resultat = 0;
for (var cpt = 0; cpt < notes.length; cpt++) {
  resultat += notes[cpt];
}

var moyenne = resultat / notes.length;
console.log("La moyenne est de : %d", moyenne.toFixed(1));
