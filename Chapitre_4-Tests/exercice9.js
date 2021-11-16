/**
 * LES TESTS
 * —
 * Exercice 9
 */

var age = 10;
var sexe = false;
var ville = "marseille";

if (age >= 70 && (ville === "Toulouse" || ville === "toulouse")) { // Personnes âgées de Toulouse
  if (sexe) { // de sexe masculin
    console.log("Personne âgée de Toulouse de sexe masculin");
  } else { // de sexe féminin
    console.log("Personne âgée de Toulouse de sexe féminin");
  }
} else if (age >= 18 && age < 70 && (ville === "Paris" || ville === "Marseille" || ville === "paris" || ville === "marseille")) {// Personnes adultes de Paris ou Marseille
  if (sexe) { // de sexe masculin
    console.log("Personne adulte de Paris ou Marseille de sexe masculin");
  } else { // de sexe féminin
    console.log("Personne adulte de Paris ou Marseille de sexe féminin");
  }
}
