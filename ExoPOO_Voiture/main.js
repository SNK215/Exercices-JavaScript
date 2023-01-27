class voiture {
    constructor(modele, vitesse) {
        this.modele = modele;
        this.vitesse = vitesse;
    }
    accelerate() {
        this.vitesse += 10;
    }
    turn() {
        this.vitesse -= 5;
    }
    getSpeed() {
        return `La vitesse de la ${this.modele} est de ${this.vitesse} km/h`;
    }
}

let bmw = new voiture("Serie 1", 80);
let mercedes = new voiture("GLB", 100);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.turn();
mercedes.turn()
console.log(bmw.getSpeed());
console.log(mercedes.getSpeed());
