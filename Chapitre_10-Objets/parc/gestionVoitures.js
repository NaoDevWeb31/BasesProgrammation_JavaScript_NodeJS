/**
 * LES OBJETS
 * -
 * Module gestionVoiture
 */

var readline = require("readline-sync");

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
  modifParc: function () {
    function menu() {
      var menu = "****************************************************\n";
      menu += "1/ Modifier le nom\n";
      menu += "2/ Modifier l'adresse\n";
      menu += "0/ Annuler\n";
      menu += "**************************************************************";
      console.log(menu);
    }

    do {
      menu();
      var saisie = readline.questionInt("Quel est votre choix ? ");
      switch (saisie) {
        case 1:
          this.nom = readline.question("Quel est le nouveau nom ? ");
          break;
        case 2:
          this.adresse.libelle = readline.question(
            "Quel est la nouvelle rue ? "
          );
          this.adresse.CP = readline.question(
            "Quel est le nouveau code postal ? "
          );
          this.adresse.ville = readline.question(
            "Quel est la nouvelle ville ? "
          );
          break;
        case 0:
          console.log("Annulation");
          break;
        default:
          console.log("Cas non pris en compte");
          break;
      }
    } while (saisie !== 0);
  },
  suppressionModele: function (modele) {
    var position = this.recupererPositionModele(modele);
    if (position !== -1) {
      this.voitures.splice(position, 1);
      console.log("Suppression réussie");
    } else {
      console.log("Modèle inexistant");
    }
  },
  recupererPositionModele: function (modele) {
    for (var cpt = 0; cpt < this.voitures.length; cpt++) {
      const voiture = this.voitures[cpt];
      if (voiture.modele.toLowerCase() === modele.toLowerCase()) {
        return cpt;
      }
    }
    return -1;
  },
};

module.exports = parcVoiture;
