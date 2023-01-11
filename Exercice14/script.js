let nombreNotes = Number(prompt("Choisissez le nombre de notes à entrer "));
let notes = [];
let meilleureNote = 0;
let pireNote = 999999999;
let moyenneNote = 0;

for (let index = 0; index < nombreNotes; index++) {

    notes[index] = Number(prompt("Entrez une note"));
    
}

for (let index = 0; index < notes.length; index++) {

    if (notes[index] > meilleureNote) {

        meilleureNote = notes[index];
        
    } if (notes[index] < pireNote) {

        pireNote = notes[index];
        
    }

    moyenneNote += notes[index];

}

moyenneNote = moyenneNote / notes.length;

alert(`La meilleure note est ${meilleureNote}, la pire note est ${pireNote} et la moyenne des notes est ${moyenneNote}`);






