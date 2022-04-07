// il programma chiede all'utente quanti secondi mancano alla cottura della pasta. 
// 1) definisco una variabile dove salvare i secondi

// const secondi = parseInt(prompt("Quanti secondi mancano alla cottura della pasta?"));

// setTimeout(()=>{
//         alert("la pasta è cotta");
// }, secondi * 1000);


// simulare un countdown di 10 secondi che alla fine dice "buon anno";
// 1) Serve il query selector()
// 2) variabile impostata a 10
// 3) setInterval()
// 4) Funzione
// 5) Decremento
// 6) condizionale verificare la i

// const counter = document.querySelector(".contatore");
// console.log(counter);
// let seconds = 10;
// const timerInterval = setInterval(()=>{
//     counter.innerHTML= seconds;
// Stampare secondi dentro elemento della dom
//  decrementare secondi
// verificare se secondi === 0 bloccare l'intervallo e dire buon anno
// if(seconds == 0){
//     alert("Buon anno!");
//     clearInterval(timerInterval);
// }
// seconds--;

// }, 1000)



// cliccando su un pulsante viene avviato un conometro, cliccando su un altro pulsante viene stoppato
// /*
// strumenti utili
// -button (start and stop)
// - setInterval()
// - variabile second, varibile per setInterval
// -clearInterval
// -addEventListener() x2 (button)

// */
// let termina_tempo;

// 1) Selezinare bottone start
// const start = document.getElementById("start");
// 2) aggiungere eventListener al bottone start
// start.addEventListener("click", function(){
//     console.log("Hai cliccato su start");
//     avviare cronometro 
//     variabile per i secondi inizializzata a 0
//     let secondo = 0;
//     incrementare secondi
//     const timer = setInterval(() => {
//         mostare a schermo i secondi
//         document.querySelector(".cronometro").innerHTML = secondo;
        

//         secondo++;
//     }, 1000);


// })
// 3) Selezinare bottone stop
// const stop = document.getElementById("stop");
// 4) aggiungere eventListener al bottone stop
// stop.addEventListener("click", function(){
//     console.log("Hai cliccato su stop");
//     fermare il cronometro
   
//     clearInterval(timer);
// })



/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
-- step da effettuare

- div html
- document.querySelector() | getElementbyid()
- serve una variabile number = array
- Math.random() | copio da w3school la funzione genera number
- ?

*/

//Visualizzare in pagina 5 numeri casuali
// -elemento della dom dove inserire numeri casuali
const number_element = document.querySelector(".casual_numbers");



// - creare variabile dove salvare i numeri casuali
const random_numbers=[];
// - creare 5 numeri casuali e salvarli nell'array che non si ripetino

while(random_numbers.length !==5){
    const number = Math.floor(Math.random() * 100);
    if(!random_numbers.includes(number)){
        random_numbers.push(number);
    }
}
console.log(random_numbers);
number_element.innerHTML = random_numbers.toString();

//faccio partire un timer di 30 secondi
// 1) Imposto il set timeout a 30 secondi
setTimeout(() => {
    //opo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    //--faccio un ciclo e chiedo all'utente di inserire un numero
    const numeri_utente =[];
    for(let i = 0; i<5; i++){
        const numero_visualizzato=parseInt(prompt("Inserisci numero: "));
        console.log(numero_visualizzato);
       if(numero_visualizzato.includes(numeri_utente)){
           numero_visualizzato.push(numeri_utente);
       }


    }
    console.log(numeri_utente);

    //mi serve un array che contiene i numeri inseriti dall'utente
    // il software ritorna quali e quanti  numeri sono stati indovinati

}, 3000);