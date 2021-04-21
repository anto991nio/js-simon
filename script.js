
//creiamo delle variabile dove indichiamo il numero massimo che può essere generato, la lunghezza dell'arrei di numeri generati in questo caso 5 e un arrey che contenga i numeri generati


var minNumber = 1;
var maxNumber = 100;
var aiNumbers = [];
var aiNumbersLength = 5;
var userNumbers = [];
var userLenghtMax = 5;


//creiamo una funzione per poter generare i numeri da poter comunicare all'utente e facciamo in modo che siano tutti diversi

function createAiNumbers() {
    do {
        var numeroRandom = generateRandomNumbers(minNumber, maxNumber);
        if (aiNumbers.indexOf(numeroRandom) === -1) {
            aiNumbers.push(numeroRandom)
        }

    } while (aiNumbers.length < aiNumbersLength)

    console.log(aiNumbers);


}

function generateRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min)) + min


}

createAiNumbers();


//comunichiamo all'utente i numeri tramite un alert

alert("Ciao di seguito i numeri generati: " + aiNumbers + " tra 30 secondi dovrai riscriverli. Leggili con attenzione.")


//Dopo i 30 secondi chiediamo all'utente di inserire i 5 numeri, facendo anche un controllo se ha inserito o meno già il numero o se ha inserito un numero

setTimeout(function() {
    while (userNumbers.length < userLenghtMax){
        var userInput = parseInt(prompt("Inserisci un numero tra " + minNumber + "e" + maxNumber + "."));

        if((userNumbers.indexOf(userInput) === -1) && userInput < 100){
        userNumbers.push(userInput);
        } else{
            alert("il numero che hai inserito non è valido")
        }
    }

    //ora controlliamo i numeri che abbiamo inseriti con quelli generati dal computer, e indichamo all'utente quante volte ha indovinato e quali sono quelli che ha indovinato.

  
    var numbersCorrispondenti = [];
    
    for( var i = 0; i< 5; i++){
        var elementControllati = userNumbers[i];
        if(aiNumbers.indexOf(elementControllati) > -1){
            numbersCorrispondenti.push(elementControllati);
        }
    
        
    }
   

    console.log(userNumbers);


    console.log( " i numeri individuati sono " + numbersCorrispondenti.length + " e sono " + numbersCorrispondenti)
}, 30 * 1000)





