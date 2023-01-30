import { Produit } from "./Produit.js";
import { Service } from "./Service.js";

export class Ihm {
    constructor(formulaire,tableauHtmlResultat, tableauHtmlResultat2){
        this.produits = [];
        this.services = [];
        this.formulaire = formulaire;
        this.tableauHtmlResultat = tableauHtmlResultat;
        this.tableauHtmlResultat2 = tableauHtmlResultat2;
    }

    demarrer(){
        this.formulaire.addEventListener("submit",(e) => {
            e.preventDefault();
            this.ajouter();
        })
    }

    ajouter() {
        let titre = document.querySelector("input[name='titre']:checked").value;
        let description = document.querySelector("input[name='description']").value;
        let prix = document.querySelector("input[name='prix']").value;
        if (document.querySelector("input[name='stock']")) {
            let stock = document.querySelector("input[name='stock']").value;
            let produit = new Produit(titre, prix, description, stock)
            this.produits.push(produit);
            this.afficher(produit)
        } if (document.querySelector("input[name='domaine']")) {
            let domaine = document.querySelector("input[name='domaine']").value;
            let service = new Service(titre, prix, description, domaine)
            this.services.push(service);
            this.afficher2(service)
        }
        
    }

    afficher(c){
        // Ajouter un contact à l'affichage HTML
        this.tableauHtmlResultat.innerHTML += `<tr>
        <td>${c.titre}</td>
        <td>${c.prix}</td>
        <td>${c.description}</td>
        <td>${c.stock}</td>
        </tr>
        `
    }

    afficher2(c){
        // Ajouter un contact à l'affichage HTML
        this.tableauHtmlResultat.innerHTML += `<tr>
        <td>${c.titre}</td>
        <td>${c.prix}</td>
        <td>${c.description}</td>
        <td>${c.domaine}</td>
        </tr>
        `
    }
}