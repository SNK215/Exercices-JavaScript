import vehicule from "./vehicule.js";

const startTimer = document.querySelector("#startTimer");
const stopTimer = document.querySelector("#stopTimer");
let intTime, outTime, tempsEcoule, immatriculation;
let affichage = document.querySelector("#affichage");

startTimer.addEventListener('click', (e) => {
    intTime = new Date()
    immatriculation = document.querySelector("#immatriculationInput").value;
    console.log(immatriculation);
    document.querySelector("#immatriculationInput").value = "";
})

stopTimer.addEventListener('click', (e) => {
    affichage.textContent = "";
    if (document.querySelector("#immatriculationInput").value == immatriculation) {
        outTime = new Date();
        tempsEcoule = Math.round(((outTime-intTime)/1000)/60)
        if (tempsEcoule <= 15) {
            affichage.textContent = "Vous devez payer 0.8€"
        } if (tempsEcoule > 15 && tempsEcoule <= 30) {
            affichage.textContent = "Vous devez payer 1.30€"
        } if (tempsEcoule > 30 && tempsEcoule <= 45) {
            affichage.textContent = "Vous devez payer 1.70€"
        } if (tempsEcoule > 45) {
            affichage.textContent = "Vous devez payer 6€"
        }
        affichage.textContent += ` pour le véhicule ${immatriculation} (temps écoulé : ${tempsEcoule}m)`
    } else {
        affichage.textContent = "Plaque d'immatriculation inconnue"
    }
})

