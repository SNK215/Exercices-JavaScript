import vehicule from "./vehicule.js";

export default class moto extends vehicule {
    constructor(marque, modele, kilometrage, annee) {
        super(marque, modele, kilometrage, annee);
    }
}