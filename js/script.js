
// Il programma dovrà chiedere all'utente il numero di chilometri (numero intero) che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca

//richiedi all'utente i km 
//richiedi all'utente l'età 


//calcola in base la distanza che deve percorrere il prezzo intero del biglietto

//Se utente ha età < 18 allora avrà uno sconto del 20% sul prezzo intero del biglietto
//Se utente ha età > 65 allora avrà uno sconto del 40% sul prezzo intero del biglietto
//altrimenti pagherà l'importo pieno.


//Output:messaggio con prezzo finale

let kmStr = prompt('Indica con solo numeri interi quanti km vuoi percorrere')
let ageStr = prompt('Inserisci la tua età')
let km = parseInt(kmStr);
let age = parseInt(ageStr);
console.log(km, age);


let distancePrice = km * 0.21
console.log(distancePrice);

let ticket
if (age < 18) {
  ticket = distancePrice - (distancePrice * 20 / 100)
}
else if (age > 65) {
  ticket = distancePrice - (distancePrice * 40 / 100)
}

else {
  ticket = distancePrice
}
ticket = ticket.toFixed(2)
console.log(ticket);









