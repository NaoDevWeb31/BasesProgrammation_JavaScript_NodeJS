/**
 * LES TABLEAUX MULTI-DIMENSIONNELS
 * -
 * Exercice 3
 */

// Main
var eleves = [
  ["Toto", 4, 17],
  ["Titi", 11, 12],
  ["Tata", 12, 14],
];

afficherMoyennes(eleves);

// Fonctions
function afficherMoyennes(tab) {
  for (var i = 0; i < tab.length; i++) {
    afficherMoyEleve(tab[i]);
  }
}

function afficherMoyEleve(tab) {
  console.log("La moyenne de ➤ " + tab[0] + " est : " + calculerMoyenne(tab));
}

function calculerMoyenne(tab) {
  var moyenne = 0;
  var nbNotes = 0;
  for (var cpt = 0; cpt < tab.length; cpt++) {
    const note = tab[cpt];
    if (typeof(note) === "number") {
      moyenne += note;
      nbNotes++;
    }
  }
  moyenne /= nbNotes;
  return moyenne;
}
