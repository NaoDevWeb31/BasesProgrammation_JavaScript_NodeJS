/**
 * Mon Deuxième Programme
 * utilisant les types
 */

var score = 10;
var nom = "Milo";
var sexe = true;
console.log("Le score est de %d", score); // %d => décimal
console.log("Le nom est %s", nom); // %s => string
console.log("Le sexe est " + sexe);

var phrase = "Bonjour";
phrase += " "; // phrase = phrase + " "
phrase += "toto.\n"; // phrase = phrase + "toto.\n"
phrase += "Comment tu vas ?"; // phrase = phrase + "Comment tu vas ?"

console.log(phrase);

var chiffre1 = 1; // chiffre 1 est un entier
var chiffre2 = "2"; // chiffre 2 est une chaîne
var chiffre3 = chiffre1 + chiffre2;

console.log("Le chiffre 3 est égal à " + chiffre3); // Le chiffre 3 est égal à 12
