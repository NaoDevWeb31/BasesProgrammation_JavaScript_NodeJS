/**
 * LES TESTS
 * —
 * Exercice 3
 */

var nom = "Matthieu";
console.log(nom.substr(2, 2)); // string.substr(indice du caractère de départ, nombre de caractères à récupérer)

nom = "Mathilde";
var premiereLettre = nom.substr(0, 1);

if (premiereLettre === "M") {
  console.log("Bravo");
}
