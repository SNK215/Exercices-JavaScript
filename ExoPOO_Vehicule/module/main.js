import voiture from "./js/voiture.js";
import moto from "./js/moto.js";
import vehicule from "./js/vehicule.js";

let voiture1 = new voiture("Ferrari", "F150", 50000, 1980);
let moto1 = new moto("KTM", "390RC", 32000, 2012);

console.log(voiture1.display());
console.log(moto1.display());

document.querySelector("#displayVoiture").textContent = voiture1.display();
document.querySelector("#displayMoto").textContent = moto1.display();


