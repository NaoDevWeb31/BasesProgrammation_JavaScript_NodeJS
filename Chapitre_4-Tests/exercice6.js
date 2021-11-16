/**
 * LES TESTS
 * —
 * Exercice 6
 */

var readline = require("readline-sync");

var moisEnLettre = readline.question("Saisir un mois de l'année (en lettte) : ");

if (moisEnLettre === "Janvier") {
  console.log("Le mois de %s correspond à 1", moisEnLettre);
} else if (moisEnLettre === "Février") {
  console.log("Le mois de %s correspond à 2", moisEnLettre);
} else if (moisEnLettre === "Mars") {
  console.log("Le mois de %s correspond à 3", moisEnLettre);
} else if (moisEnLettre === "Avril") {
  console.log("Le mois de %s correspond à 4", moisEnLettre);
} else if (moisEnLettre === "Mai") {
  console.log("Le mois de %s correspond à 5", moisEnLettre);
} else if (moisEnLettre === "Juin") {
  console.log("Le mois de %s correspond à 6", moisEnLettre);
} else if (moisEnLettre === "Juillet") {
  console.log("Le mois de %s correspond à 7", moisEnLettre);
} else if (moisEnLettre === "Août") {
  console.log("Le mois de %s correspond à 8", moisEnLettre);
} else if (moisEnLettre === "Septembre") {
  console.log("Le mois de %s correspond à 9", moisEnLettre);
} else if (moisEnLettre === "Octobre") {
  console.log("Le mois de %s correspond à 10", moisEnLettre);
} else if (moisEnLettre === "Novembre") {
  console.log("Le mois de %s correspond à 11", moisEnLettre);
} else if (moisEnLettre === "Décembre") {
  console.log("Le mois de %s correspond à 12", moisEnLettre);
}
