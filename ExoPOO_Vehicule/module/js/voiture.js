import vehicule from "./vehicule.js";

export default class voiture extends vehicule {
    constructor(marque, modele, kilometrage, annee) {
        super(marque, modele, kilometrage, annee);
        this.clim = true;
    }
    display() {
        let climString = "";
        if (this.clim == true) {
            climString = "Climatisée"
        } else {
            climString = "Non climatisée"
        }
        return `${this.constructor.name}: ${this.marque} - ${this.modele} - ${this.kilometrage}km - ${this.annee} - ${climString}`;
    };
}
