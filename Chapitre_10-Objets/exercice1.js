/**
 * LES OBJETS
 * -
 * Exercice 1
 */

// Classe
class Eleve {
  constructor(nom, note1, note2, note3) {
    this.nom = nom;
    this.note1 = note1;
    this.note2 = note2;
    this.note3 = note3;
  }
}

// Main
var P1 = new Eleve("Toto", 15, 13, 10);
var P2 = new Eleve("Titi", 12, 17, 16);
var P3 = new Eleve("Tata", 10, 8, 12);

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
function calculerMoyenne(eleve) {
  var moyenne = 0;
  var nbNotes = 0;
  for (var element in eleve) {
    if (typeof eleve[element] === "number") {
      const note = eleve[element];
      moyenne += note;
      nbNotes++;
    }
  }
  return moyenne / nbNotes;
}
