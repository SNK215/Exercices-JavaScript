let nombreMystere =  Math.floor(Math.random() * (1000 - 0) + 0);
let essais = 0;
let boutonValider = document.getElementById("valider");
let resultat = document.getElementById("resultat");

boutonValider.addEventListener("click", () => {
    let nombreInput = document.getElementById("nombre").value;
    essais += 1;
    switch (true) {
        case nombreInput > nombreMystere:
        resultat.textContent = `C'est moins ! ${essais}e essaie`;
        break;

        case nombreInput < nombreMystere:
        resultat.textContent = `C'est plus ! ${essais}e essaie`;
        break;
        case nombreInput == nombreMystere:
        resultat.textContent = `C'est gagné ! ${essais}e essaie`;
        break;
    }
});