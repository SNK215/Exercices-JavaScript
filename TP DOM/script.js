let nombreNotes = Number(prompt("Choisissez le nombre de notes à entrer "));
let notes = [];
let meilleureNote = 0;
let pireNote = 999999999;
let moyenneNote = 0;
saisie = document.querySelector("#saisie");

for (let index = 0; index < nombreNotes; index++) {

    notes[index] = Number(prompt("Entrez une note"));
    saisie.innerHTML += `<li>En note ${index+1} vous avez saisie ${notes[index]}/20</li>`;

    if (notes[index] > meilleureNote) {

        meilleureNote = notes[index];
        
    } if (notes[index] < pireNote) {

        pireNote = notes[index];
        
    }

    moyenneNote += notes[index];
    
}

moyenneNote = moyenneNote / notes.length;

titreSaisie = document.querySelector("#titreSaisie");
titreSaisie.textContent = `La série contient ${nombreNotes} notes`;

notes = document.querySelector("#notes");
notes.textContent = `La meilleure note est ${meilleureNote}, la pire note est ${pireNote} et la moyenne des notes est ${moyenneNote}`;








