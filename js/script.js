// alert ("CIAOOO")

//esecuzione logica
//CREO NUMERI DA 1 A 100
for(let i = 0; i <= 100; i++){
    //CONTROLLO SE SONO DIVISIBILI ENTRAMBI, METTO fizzbuss
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(`FIZZBUZZ`);
    }
    //Controllo se i è multiplo di 3 e scrivo FIZZ
    else if (i % 3 === 0){
        console.log(`FIZZ`);
        //ALTRIMENTI
    }
    //Controllo se i è multiplo di 5 e scrivo BUZZ
    else if (i % 5 === 0){
        console.log(`BUZZ`);
        //ALTRIMENTI
    } else {
        //ALTRIMENTI STAMPA I NUMERI
        console.log(i)
    }
}