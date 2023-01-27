export default class vehicule {
    constructor(marque, modele, kilometrage, annee) {
        this.marque = marque;
        this.modele = modele;
        this.kilometrage = kilometrage;
        this.annee = annee;
    }
    display() {
        return `${this.constructor.name}: ${this.marque} - ${this.modele} - ${this.kilometrage}km - ${this.annee}`;
    }
}

