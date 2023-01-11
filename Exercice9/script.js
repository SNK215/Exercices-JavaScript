let age = parseInt(prompt("Entrez l'âge du salarié: "));
let anciennete = parseInt(prompt("Entrez l'ancienneté du salarié: "));
let salaire = parseInt(prompt("Entrez le dernier salaire du salarié: ")); 
let indemnite;

if (anciennete <= 10) {

    console.log("Le salarié touche une indémnité équivalente à la moitié d'un salaire");
    indemnite = salaire/2;
    if (age > 45) {
    
        if (age >= 46 && age <= 49) {
            
            indemnite = indemnite + 2*salaire
            console.log(`Le salarié touche une indémnité supplémentaire équivalente à 2 mois de salaire (total: ${indemnite}€)`);
    
        } if (age >= 50) {

            indemnite = indemnite + 5*salaire;
            console.log(`Le salarié touche une indémnité supplémentaire équivalente à 5 mois de salaire (total: ${indemnite}€)`);
    
        }
    
    } 

} if (anciennete > 10) {

        indemnite = salaire;
        console.log("Le salarié touche une indémnité équivalente à un salaire");
        if (age > 45) {
    
            if (age >= 46 && age <= 49) {
            
                indemnite = indemnite + 2*salaire
                console.log(`Le salarié touche une indémnité supplémentaire équivalente à 2 mois de salaire (total: ${indemnite}€)`);
        
            } if (age >= 50) {
                
                indemnite = indemnite + 5*salaire;
                console.log(`Le salarié touche une indémnité supplémentaire équivalente à 5 mois de salaire (total: ${indemnite}€)`);
        
            }
        
        } 

} 