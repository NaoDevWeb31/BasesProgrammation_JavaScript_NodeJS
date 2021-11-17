/**
 * LES FONCTIONS
 * -
 * Exercice 1
 */

                                                // Main
afficherLignes(1);
console.log("Bonjour");
afficherLignes(4);
console.log("Coucou");
afficherLignes(4);
console.log("Salut");
afficherLignes(1);

                                                // Fonctions
function creerLigne() {
  var tirets = "";

  for (var cpt = 1; cpt <= 50; cpt++) {
    tirets += "-";
  }
  console.log(tirets);
}

function afficherLignes(nbLignes) {
  for (let cpt1 = 1; cpt1 <= nbLignes; cpt1++) {
    creerLigne();
  }
}
