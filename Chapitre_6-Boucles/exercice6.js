/**
 * LES BOUCLES
 * —
 * Exercice 6
 */

for (let cpt1 = 1; cpt1 <= 5; cpt1++) {
  var slash = "";
  var antislash = "";

  if (cpt1 % 2 === 0) {
    for (var cpt = 1; cpt <= 20; cpt++) {
      antislash += "\\";
    }
    console.log(antislash);
  } else {
    for (var cpt = 1; cpt <= 20; cpt++) {
      slash += "/";
    }
    console.log(slash);
  }
}
