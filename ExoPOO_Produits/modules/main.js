import { Ihm } from "./classes/Ihm.js";

const form = document.querySelector("#formContact");
const result = document.querySelector("#result");
const result2 = document.querySelector("#result2");

let radioButtonProduit = document.querySelector("#produit");
let radioButtonService = document.querySelector("#service");
let changeInput = document.querySelector("#changeInput");

const ihm = new Ihm(form,result,result2);

ihm.demarrer();

radioButtonService.addEventListener("click", () => {
        console.log("Option service choisie");
        changeInput.innerHTML = `<input class="form-control" placeholder="Domaine" name="domaine" type="text"  />`
})

radioButtonProduit.addEventListener("click", () => {
    console.log("Option produit choisie");
    changeInput.innerHTML = `<input class="form-control" placeholder="Stock" name="stock" type="number"  />`
})