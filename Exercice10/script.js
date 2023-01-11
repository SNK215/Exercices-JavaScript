console.log("Menu des boissons: ");
console.log("1. Eau");
console.log("2. Jus d'orange");
console.log("3. Limonade");
console.log("4. Café");
console.log("5. Thé");

let userChoice = Number(prompt("Choisisssez votre boisson: "));

switch (userChoice) {
    case 1:
        console.log("Vous avez choisi l'eau !");
    break;
    case 2:
        console.log("Vous avez choisi le jus d'orange !");
    break;
    case 3:
        console.log("Vous avez choisi la limonade !");
    break;
    case 4:
        console.log("Vous avez choisi le café !");
    break;
    case 5:
        console.log("Vous avez choisi le thé !");
    break;

    default:
        break;
}