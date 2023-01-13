let annuaire = [
    {
        nom: "Dupont",
        prenom: "Jean",
        age: 15
    },
    {
        nom: "Durant",
        prenom: "Pierre",
        age: 16
    },
    {
        nom: "Martin",
        prenom: "Jean",
        age: 17
    }
];

function ajoutContact(nomInput,prenomInput,ageInput) {

    let personne = {
        nom: nomInput,
        prenom: prenomInput,
        age: ageInput
    }

    annuaire.push(personne);

} 

function listeContact() {

    let message = "";
            for (let index = 0; index < annuaire.length; index++) {
                
                message += `${index+1}) ${annuaire[index].nom} ${annuaire[index].prenom}, ${annuaire[index].age} ans\n`
                
            }
    return message;

}

let running = true;
while (running) {

    let choix = Number(prompt("Veuillez choisir une option :\n 1.Afficher contacts\n 2.Ajouter contact\n 3.Supprimer contact\n 4.Quitter"));

    switch (choix) {
        case 1:

            console.table(annuaire);
            alert("Contacts:\n" + listeContact());

            break;

        case 2:

        let nom = prompt("Entrez le nom de la personne à ajouter");
        let prenom = prompt("Entrez le prénom de la personne à ajouter")
        let age = Number(prompt("Entrez l'âge de la personne à ajouter"));
        ajoutContact(nom,prenom,age);
        alert("Contact ajouté !")

            break;

        case 3:

            let contactDelete = Number(prompt("Veuillez choisir le contact à supprimer\n" + listeContact()));
            annuaire.splice(contactDelete - 1, 1);
            alert("Contact supprimé !")

            break;
    
        case 4:

            alert("Ciao !")
            running = false;

            break;
    }

}
