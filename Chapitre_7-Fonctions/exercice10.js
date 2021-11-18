/**
 * LES FONCTIONS
 * -
 * Exercice 10
 */

// Main
var readline = require("readline-sync");

var capital = readline.questionInt("Combien voulez-vous emprunter ? ");
var taux = readline.questionInt(
  "Quel est le taux proposé par votre banque par an ? "
);
var duree = readline.questionInt(
  "Quelle est la durée de l'emprunt en année ? "
);
console.log("--------------------");
console.log("Votre mensualité sera de %d € par mois", calculerMensualiteRemboursementEmprunt(capital, taux, duree));

// Fonction
function calculerMensualiteRemboursementEmprunt(capitalEmprunte, tauxInteret, nbAnnee) { // Fonction VPM d'Excel
  var i = tauxInteret / 100 / 12; // taux de remboursement par mois en %
  var n = nbAnnee * 12; // par année
  var mensualite = capitalEmprunte * (i / (1 - Math.pow(1 + i, -n)));
  return mensualite.toFixed(2); // OU Math.round(mensualite * 100) / 100
}
