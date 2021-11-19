/**
 * LES OBJETS
 * -
 * Exemple
 */

var perso1 = {
  nom: "Milo",
  sexe: true,
  age: 30,
};
afficherInfos(perso1);
console.log("********************");

var perso2 = {};
perso2.nom = "Tya";
perso2.sexe = false;
perso2.age = 25;
afficherInfos(perso2);
console.log("********************");

class Perso {
  constructor(nom, sexe, age) {
    this.nom = nom;
    this.sexe = sexe;
    this.age = age;
  }
}

var perso3 = new Perso("Lili", false, 16);
for (const info in perso3) {
  console.log(info + " : " + perso3[info]);
}

function afficherInfos(tab) {
  console.log("Nom : %s", tab.nom);
  console.log("Sexe : %s", tab.sexe ? "Homme" : "Femme");
  console.log("Âge : %d", tab.age);
}
