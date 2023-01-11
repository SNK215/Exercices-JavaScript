let wordInput = prompt("Entrez un mot: ");
let wordReverse = wordInput.split("").reverse().join("");

if (wordInput == wordReverse) {

    alert(`Le mot "${wordInput}" est un palindrome ! `)

} else {

    alert(`Le mot "${wordInput}" n'est PAS un palindrome ! `)

}


