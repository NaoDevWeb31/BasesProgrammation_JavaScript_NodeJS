/**
 * LES OBJETS
 * -
 * Exercice 3
 */

// Classe
class Voiture {
  constructor(marque, modele, nombre, prix) {
    this.marque = marque;
    this.modele = modele;
    this.nombre = nombre;
    this.prix = prix;
  }
}

// Objets
var v1 = new Voiture("Yotota", "Ryas", 10, 8000);
var v2 = new Voiture("Yotota", "Risau", 5, 7500);
var v3 = new Voiture("Nautre", "Negan", 13, 5000);

var parcVoiture = {
  nom: "monSuperParc",
  adresse: {
    libelle: "12 rue des fleurs",
    CP: 31000,
    ville: "Toulouse",
  },
  voitures: [v1, v2, v3],
  afficherVoitures: function () {
    console.log("*******************************");
    console.log("******** Parc voitures ********");
    console.log("*******************************");
    for (let cpt = 0; cpt < this.voitures.length; cpt++) {
      const voiture = this.voitures[cpt];
      console.log("******* Voiture %d *******", cpt + 1);
      console.log("Marque : " + this.voitures[cpt].marque);
      console.log("Modèle : " + this.voitures[cpt].modele);
      console.log("Nombre de voitures : " + this.voitures[cpt].nombre);
      console.log("Prix moyen : " + this.voitures[cpt].prix + " €");
    }
  },
  afficherParc: function () {
    var msg = "Le parc " + this.nom + " présent à l'adresse :\n";
    msg += this.adresse.libelle + "\n";
    msg += this.adresse.CP + " " + this.adresse.ville;
    console.log(msg);
  },
};

// Main
parcVoiture.afficherParc();
parcVoiture.afficherVoitures();
