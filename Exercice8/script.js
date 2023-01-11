let email = "contact@teamjs.fr";
let mdp = "leLundiAuSoleil";

let inputEmail = prompt("Entrez votre adresse mail: ");

if (email == inputEmail) {

    let inputMdp = prompt("Entrez votre mot de passe: ");
    if (mdp == inputMdp) {

        alert("Bienvenue sur votre page d'accueil ! :)");

    } else {

        alert("Mot de passe erronné !");

    }
} else {

    alert("Email erronné !");

};