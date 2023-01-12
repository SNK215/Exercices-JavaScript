let etudiants = [ 
    { 
        prenom: "José", 
        nom: "Garcia", 
        matieres: { 
            francais: 16, 
            anglais: 7, 
            humour: 14 
        }  
    }, 
    { 
        prenom: "Antoine", 
        nom: "De Caunes", 
        matieres: { 
            francais: 15, 
            anglais: 6, 
            humour: 16, 
            informatique: 4, 
            sport: 10 
        } 
    } 
]; 

for (let index = 0; index < etudiants.length; index++) {

    let {matieres, ...person} = etudiants[index];
    console.log(person.prenom, person.nom);
    
}

for (let index = 0; index < etudiants.length; index++) {

    let {prenom,nom, ...person} = etudiants[index];
    console.log(person.matieres);
    
}

let total = 0;
let nbNotes = 0;
for (let i = 0; i < etudiants.length; i++) {

   for (let key in etudiants[i].matieres) {
    
    total += etudiants[i].matieres[key];
    nbNotes++

   }
    
}

let moyenne = total / nbNotes;
console.log(moyenne);



