/**
 * LES TYPES
 * —
 * Exercice 1
 */
var marque = "Yotota";
var modele = "Riyas";
var nbPortes = 3;
var annee = 2002;

var anneAuj = new Date().getFullYear();
var age = anneAuj - annee;

console.log("Marque : " + marque);
console.log("Modèle : " + modele);
console.log("La voiture dispose de " + nbPortes + " portes");
console.log("La voiture date de %d, elle a donc %d ans", annee, age);
