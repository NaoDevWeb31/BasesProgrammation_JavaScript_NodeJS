/**
 * LES OBJETS
 * -
 * Exercice 1
 */

// Classe
class Perso {
  constructor(nom, note1, note2, note3) {
    this.nom = nom;
    this.note1 = note1;
    this.note2 = note2;
    this.note3 = note3;
  }
}

// Main
var P1 = new Perso("Toto", 15, 13, 10);
var P2 = new Perso("Titi", 12, 17, 16);
var P3 = new Perso("Tata", 10, 8, 12);

var persos = [P1, P2, P3];

for (var cpt = 0; cpt < persos.length; cpt++) {
  const perso = persos[cpt];
  var moyenne = calculerMoyenne(perso);
  console.log("La moyenne de %s est : %d", perso.nom, moyenne.toFixed(1));
}

// Fonction
/**
 * Fonction permettant de calculer la moyenne des notes d'un élève
 * @param {Object} P P : Objet contenant le nom et les notes d'un élève
 * @returns {number} retourne la moyenne
 */
function calculerMoyenne(P) {
  var moyenne = 0;
  var nbNotes = 0;
  for (var element in P) {
    if (typeof P[element] === "number") {
      const note = P[element];
      moyenne += note;
      nbNotes++;
    }
  }
  return moyenne / nbNotes;
}
