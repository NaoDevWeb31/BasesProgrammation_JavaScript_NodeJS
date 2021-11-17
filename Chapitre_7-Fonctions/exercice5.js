/**
 * LES FONCTIONS
 * -
 * Exercice 5
 */

// Main
verifierParite(50, 2);
afficherLignesSeparation(1);
verifierParite(50, 3);
afficherLignesSeparation(1);
verifierParite(50, 4);
afficherLignesSeparation(1);
verifierParite(50, 5);

// Fonctions
function verifierParite(nombre, diviseur) {
  if (nombre % diviseur === 0) {
    console.log("Le nombre %d est divisible par %d", nombre, diviseur);
  } else {
    var reste = nombre % diviseur;
    console.log("Le nombre %d n'est pas divisible par %d car le reste est de %d", nombre, diviseur, reste);
  }
}

function creerLigneSeparation() {
  var tirets = "";
  for (var cpt = 1; cpt <= 22; cpt++) {
    tirets += "-";
  }
  console.log(tirets);
}

function afficherLignesSeparation(nbLignes) {
  for (let cpt1 = 1; cpt1 <= nbLignes; cpt1++) {
    creerLigneSeparation();
  }
}
