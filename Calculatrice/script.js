function afficher(val) 
{ 
    document.getElementById("ecran").innerText+=val;
} 

function calculer() 
        { 
            let operation = document.getElementById("ecran").innerText;
            let resultat = eval(operation) ;
            document.getElementById("ecran").innerText = resultat; 
        } 

function effacer() 
{ 
    document.getElementById("ecran").innerText = ""; 
} 

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        document.getElementById("ecran").innerText+="";
        calculer();
    } else {
        document.getElementById("ecran").innerText+=e.key;
    }
    console.log(e.key)

})