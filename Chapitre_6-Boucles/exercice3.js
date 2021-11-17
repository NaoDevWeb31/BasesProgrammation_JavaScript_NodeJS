/**
 * LES BOUCLES
 * —
 * Exercice 3
 */

var resultat = 0;

// for (var cpt = 0; cpt <= 200; cpt = cpt + 2) {
//   resultat += cpt;
// }

for (var cpt = 0; cpt <= 200; cpt++) {
  if (cpt % 2 === 0) {
    resultat += cpt;
  }
}

console.log(
  "La somme des 100 premiers nombres pairs est égale à : " + resultat
);
