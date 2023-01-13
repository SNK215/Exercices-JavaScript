let legume = {
    code: 3,
    name: "poivron rouge",
    price: 4.99
}

maFonction = (monObjet) => monObjet.name;

console.log(maFonction(legume));

let personne = { 
    nom: "Dupond",
    prenom: "Jean",
    age: 33
}

maFonction2 = (monObjet,monObjet2) => `Bonjour ${monObjet.prenom}, ton légume préféré est le ${legume.name}`

console.log(maFonction2(personne,legume));

let tab = ["Pierre", "Hasard"]

maFonction3 = (tableau) => `Bonjour ${tableau[0]} ${tableau[1]} !`;

console.log(maFonction3(tab));