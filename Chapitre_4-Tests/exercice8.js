/**
 * LES TESTS
 * —
 * Exercice 8
 */

var age = 18;
var taille = 175;
var paysDeRésidence = "France";

if (age > 16 && taille > 160 && (paysDeRésidence === "France" || paysDeRésidence === "france")) {
  console.log("Apte à être pompier");
} else {
  console.log("Inapte à être pompier");
}
