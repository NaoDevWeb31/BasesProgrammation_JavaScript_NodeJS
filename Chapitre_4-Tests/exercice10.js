/**
 * LES TESTS
 * —
 * Exercice 10
 */

var readline = require("readline-sync");

var sexe = true;
var age = 31;
console.log("Sexe : " + ((sexe === true) ? "Homme" : "Femme"));
console.log((age >= 18) ? "Majeur" : "Mineur");
console.log("\n***********************************************\n");

age = 17;
console.log(age < 18 ? "mineur" : "majeur");

var sportif = true;
console.log(sportif ? "bien" : "Devrait faire du sport");

sexe = false;
var sexeEnMot = sexe ? "Femme" : "Fomme";
console.log(sexeEnMot);

var saisie1 = readline.questionInt("Saisir un nombre : ");
var parite = saisie1 % 2 === 0 ? "pair" : "impair"
console.log("Parité : " + parite);

var saisie2 = readline.questionInt("Saisir un second nombre : ");
var divisiblePar4 = saisie2 % 4 === 0 ? "Divisible par 4" : "Non divisible par 4"
console.log(divisiblePar4);
