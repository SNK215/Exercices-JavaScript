let habitantsTourcoing = 96809;
let taux = 0.89;
let annee = 0;  

while (habitantsTourcoing < 120000) {
    
    habitantsTourcoing *= ((0.89/100)+1);
    annee++;

}

alert(`Tourcoing aura plus de 120000 habitants dans ${annee} ans. (${Math.round(habitantsTourcoing)} habitants cette année là)`)