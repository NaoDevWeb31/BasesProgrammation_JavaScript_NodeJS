/**
 * LES FONCTIONS
 * -
 * Exercice 9
 */

// Main
afficherLignesSeparation(1);

console.log(direBonjour("FR") + "Matthieu");

afficherLignesSeparation(1);

console.log(direBonjour("ES") + "Tya");

afficherLignesSeparation(1);

console.log(direBonjour("EN") + "Milo");

afficherLignesSeparation(1);

// Fonctions
function direBonjour(langue) {
  switch (langue.toLowerCase()) {
    case "fr":
      return "Bonjour ";
      break;
    case "en":
      return "Hello ";
      break;
    case "es":
      return "Hola ";
      break;
    default:
      return "Cas non pris en compte";
      break;
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
