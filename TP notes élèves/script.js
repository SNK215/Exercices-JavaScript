//tableau d'élèves
let tabEleves = [
    {
        nom: "DUPOND",
        prenom: "Jean",
        notes: [
            {
                matiere: "Mathématiques",
                note: 12
            },
            {
                matiere: "Français",
                note: 14
            }
        ]
    },

    {
        nom: "PROUST",
        prenom: "Marcel",
        notes: [
            {
                matiere: "Mathématiques",
                note: 8
            },
            {
                matiere: "Français",
                note: 17
            }
        ]
    }
]

let tabMatieres = ["Mathématiques","Français"];
let divAddStudent = document.querySelector("#divAddStudent");
let addStudent = document.querySelector("#addStudent");
let divAddSubject = document.querySelector("#divAddSubject");
let addSubject = document.querySelector("#addSubject");
let divAddGrade = document.querySelector("#divAddGrade");
let addGrade = document.querySelector("#addGrade");
let selectStudent = document.querySelector("#selectStudent");
let selectSubject = document.querySelector("#selectSubject");
let selectGradeSubject = document.querySelector("#selectGradeSubject");
let selectGradeStudent = document.querySelector("#selectGradeStudent");
let selectGradeGrade = document.querySelector("#selectGradeGrade");
let affichageMoyenne = document.querySelector("#affichageMoyenne")
let moyenne = 0;
let selectStudentContent = ``;
let selectSubjectContent = ``;
let tableau = document.querySelector("#tableau");
let contenu1Tableau = ``;
let contenu2Tableau = ``;

//Fonction pour obtenir la liste des élèves
function getListStudent() {
    selectStudentContent = ``;
    for (let index = 0; index < tabEleves.length; index++) {
        selectStudentContent += `<option value="${tabEleves[index].nom} ${tabEleves[index].prenom}">${tabEleves[index].nom} ${tabEleves[index].prenom}</option>`; 
    };
    return selectStudentContent;
};

//Fonction pour obtenir la liste des matières 
function getListSubject() {
    selectSubjectContent = ``;
    for (let index = 0; index < tabMatieres.length; index++) {
        selectSubjectContent += `<option value="${tabMatieres[index]}">${tabMatieres[index]}</option>`; 
    };
    return selectSubjectContent;
};

function loadList() {
    selectStudent.innerHTML =  `<option value="allStudents" selected="selected">Toute la classe</option> + ${getListStudent()}`;
    selectSubject.innerHTML =  `<option value="allSubjects" selected="selected">Toute les matières</option> + ${getListSubject()}`;
};

//Fonction pour ajouter un élève au tableau
function fAddStudent() {
    nomInput = document.querySelector('#nom').value;
    prenomInput = document.querySelector('#prenom').value;

    //Mise en forme du NOM et Prénom
    nomInput = nomInput.toUpperCase();
    prenomInput = prenomInput.charAt(0).toUpperCase() + prenomInput.slice(1);

    let newStudent = {
        nom: nomInput,
        prenom: prenomInput,
        notes: []
    };
    tabEleves.push(newStudent);
};

//Fonction pour ajouter une matière 
function fAddSubject() {
    subjectInput = document.querySelector("#subject").value;
    subjectInput = subjectInput.charAt(0).toUpperCase() + subjectInput.slice(1);
    tabMatieres.push(subjectInput);
};

//Fonction pour ajouter une note 
function fAddGrade() {
    let studentInput = selectGradeStudent.value;
    let gradeInput = selectGradeGrade.value;
    let subjectInput = selectGradeSubject.value;
    let note = {matiere: subjectInput, note: gradeInput};

    //Si un élève correspond à l'élève choisi dans input, on lui assigne la nouvelle note
    for (let index = 0; index < tabEleves.length; index++) {
        if (tabEleves[index].nom + " " + tabEleves[index].prenom == studentInput) {
            tabEleves[index].notes.push(note);
        }
    }
    console.table(tabEleves);
};

//Afficher/Masquer ajout d'élève
addStudent.addEventListener("click", () => {
    addStudent.textContent = "OFF"
    if (divAddStudent.hidden == true) {
        divAddStudent.hidden = false;
    } else {
        addStudent.textContent = "ON";
        divAddStudent.hidden = true;
    }

    //Emêcher rafraissement de la page après envoie de formulaire
    let formStudent = document.querySelector("#formStudent");
    formStudent.addEventListener('submit', (e) => {
        e.preventDefault();
        selectGradeStudent.innerHTML = getListStudent();
        selectStudent.innerHTML =  `<option value="allStudents">Toute la classe</option> + ${getListStudent()}`;
    })
});

//Afficher/Masquer ajout de matière
addSubject.addEventListener("click", () => {
    addSubject.textContent = "OFF"
    if (divAddSubject.hidden == true) {
        divAddSubject.hidden = false;
    } else {
        addSubject.textContent = "ON";
        divAddSubject.hidden = true;
    }

    //Empêcher rafraissement de la page après envoie de formulaire
    let formSubject = document.querySelector("#formSubject");
    formSubject.addEventListener('submit', (e) => {
        e.preventDefault();
        selectGradeSubject.innerHTML = getListSubject();
        selectSubject.innerHTML =  `<option value="allSubjects">Toute les matières</option> + ${getListSubject()}`;
    })
});

//Afficher/Masquer ajout de note
addGrade.addEventListener("click", () => {
    addGrade.textContent = "OFF"
    if (divAddGrade.hidden == true) {
        divAddGrade.hidden = false;
    } else {
        addGrade.textContent = "ON";
        divAddGrade.hidden = true;
    }

    //Empêcher rafraissement de la page après envoie de formulaire
    let formGrade = document.querySelector("#formGrade");
    formGrade.addEventListener('submit', (e) => {
        e.preventDefault();
    })
});



if (selectStudent.value == "allStudents" && selectSubject.value == "allSubjects") {
    console.log("Calcul moyenne");
    for (let index = 0; index < array.length; index++) {
        for (let jindex = 0; jindex < array.length; jindex++) {
            const element = array[jindex];
            
        }
        moyenne += tabEleves[index].notes.note / 4
    }
};

console.log(selectStudent.value);
console.log(selectStudent);

affichageMoyenne.textContent = `La moyenne de la classe est ${moyenne}`;


for (let kindex = 0; kindex < tabEleves.length; kindex++) {
    contenu1Tableau += `<tr>
                            <td>${tabEleves[kindex].nom}</td>
                            <td>${tabEleves[kindex].prenom}</td>
                            <td>${tabEleves[kindex].notes[kindex].matiere}</td>
                                <td>${tabEleves[kindex].notes[kindex].note}</td>
                                <tr>`

    
}


tableau.innerHTML = `<table class="table table-dark table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Nom</th>
                                        <th scope="col">Prénom</th>
                                        <th scope="col">Matière</th>
                                        <th scope="col">Note</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${contenu1Tableau}
                                </tbody>
                                </table>`