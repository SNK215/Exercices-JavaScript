let tabChien = [];
let idCount = 2;
let monBouton = document.querySelector("#monBouton");
let select = document.getElementById("my-select");

monBouton.addEventListener("click", () => {
    let nomInput = document.querySelector('#nom').value;
    let raceInput = document.querySelector('#race').value;
    let ageInput = document.querySelector('#age').value;

    let chien = {
        ID : idCount, 
        nom : nomInput,
        race : raceInput,
        age : ageInput
    }

    tabChien.push(chien);

    select.innerHTML += `<option value="${chien.ID}">${chien.nom}</option>`

    idCount++;

    console.table(tabChien)
})

maDiv = document.getElementById("maDiv");

select.addEventListener("change", () => {
    maDiv.textContent = `Vous avez choisi le chien avec l'ID n°${select.value}`;
    console.log(select.value)
});



