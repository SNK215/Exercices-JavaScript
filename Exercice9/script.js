let age = parseInt(prompt("Entrez l'âge du salarié: "));
let anciennete = parseInt(prompt("Entrez l'ancienneté du salarié: "));
let dernierSalaire = parseInt(prompt("Entrez le dernier salaire du salarié: ")); 

if (anciennete <= 10) {

    console.log("Le salarié touche une indémnité équivalente à la moitié d'un salaire");
    if (age > 45) {
    
        if (age >= 46 && age <= 49) {
            
            console.log("Le salarié touche une indémnité supplémentaire équivalente à 2 mois de salaire");
    
        } if (age >= 50) {
            
            console.log("Le salarié touche une indémnité supplémentaire équivalente à 5 mois de salaire");
    
        }
    
    } 

} if (anciennete > 10) {

        console.log("Le salarié touche une indémnité équivalente à un salaire");
        if (age > 45) {
    
            if (age >= 46 && age <= 49) {
                
                console.log("Le salarié touche une indémnité supplémentaire équivalente à 2 mois de salaire");
        
            } if (age >= 50) {
                
                console.log("Le salarié touche une indémnité supplémentaire équivalente à 5 mois de salaire");
        
            }
        
        } 

} 