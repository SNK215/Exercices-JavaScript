let revenu = Number(prompt("Entrez vos revenus net imposables: "));
let nombreAdulte = Number(prompt("Entrez le nombre d'adultes dans votre foyer: "));
let nombreEnfant = Number(prompt("Entrez votre nombre d'enfants à charge: "));
let part = nombreAdulte;
let total = 0;
let taux = 0;

if (nombreEnfant <= 2) {

    part = part + nombreEnfant*0.5;

} if (nombreEnfant > 2) {

    part = part + nombreEnfant - 1;
    
}

total = revenu / part;

switch (true) {
    case (revenu <= 10777):
        taux = 0;
    break;

    case (revenu > 10777):
    case (revenu <= 27478):
        taux = 11;
    break;

    case (revenu >= 27479):
    case (revenu <= 78570):
        taux = 30;
    break;

    case (revenu >= 78571):
    case (revenu <= 168994):
        taux = 41;
    break;

    case (revenu >= 168995):
        taux = 45;
    break;

}

total = total * (1-(taux/100));
total = Math.round(revenu - (total * part));

console.log("total :",total);

alert(`Le montant de l'impôt sur le revenu s'élève à ${total}€`);

