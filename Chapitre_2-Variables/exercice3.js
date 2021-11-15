/**
 * LES VARIABLES
 * —
 * Exercice 3
 */
var prenom = "GASTON";
var nom = "Matthieu";
console.log("***** Avant correction *****");
console.log("Prénom : " + prenom);
console.log("Nom : " + nom);

var tmp = prenom; // tmp = GASTON, prenom = GASTON, nom = Matthieu
prenom = nom; // tmp = GASTON, prenom = Matthieu, nom = Matthieu
nom = tmp; // tmp = GASTON, prenom = Matthieu, nom = GASTON

console.log("***** Après correction *****");
console.log("Prénom : " + prenom);
console.log("Nom : " + nom);
