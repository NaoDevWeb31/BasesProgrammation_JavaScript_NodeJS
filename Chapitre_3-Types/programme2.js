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

console.log("\n**************************************************************\n");

var phrase = "Bonjour";
phrase += " "; // phrase = phrase + " "
phrase += "toto.\n"; // phrase = phrase + "toto.\n"
phrase += "Comment tu vas ?"; // phrase = phrase + "Comment tu vas ?"

console.log(phrase);

console.log("\n**************************************************************\n");

var chiffre1 = 1; // chiffre 1 est un entier
var chiffre2 = "2"; // chiffre 2 est une chaîne
var chiffre3 = chiffre1 + chiffre2;

console.log("Le chiffre 3 est égal à " + chiffre3); // Le chiffre 3 est égal à 12

console.log("\n**************************************************************\n");

var chiffre = 1; // chiffre est un entier
var chiffreEnChaine = "" + 1; // ou chiffre.toString()
console.log("La variable chiffre est de type " + typeof(chiffre) + " et a pour valeur " + chiffre);
console.log("La variable chiffreEnChaine est de type " + typeof(chiffreEnChaine) + " et a pour valeur " + chiffreEnChaine);

console.log("\n**************************************************************\n");

var dix = "10";
var dixEnChiffre = parseInt(dix);
console.log("La variable dix est de type " + typeof(dix) + " et a pour valeur " + dix);
console.log("La variable dixEnChiffre est de type " + typeof(dixEnChiffre) + " et a pour valeur " + dixEnChiffre);

console.log("\n**************************************************************\n");

var test = "dix";
var testEnChiffre = parseInt(test);
console.log("La variable test est de type " + typeof(test) + " et a pour valeur " + test);
console.log("La variable testEnChiffre est de type " + typeof(testEnChiffre) + " et a pour valeur " + testEnChiffre);