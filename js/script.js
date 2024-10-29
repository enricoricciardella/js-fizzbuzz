// alert ("CIAOOO")

//esecuzione logica
//CREO NUMERI DA 1 A 100
for(let i = 0; i <= 100; i++){
    console.log(i); //Debug
    //CONTROLLO SE SONO DIVISIBILI ENTRAMBI, METTO fizzbuss
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(`FIZZBUZZ`);
    }
    //Controllo se i è multiplo di 3 e scrivo FIZZ
    else if (i % 3 === 0){
        console.log(`FRIZZ`);
        console.log(i); //debug
    }
    //Controllo se i è multiplo di 5 e scrivo BUZZ
    else if (i % 5 === 0){
        console.log(`BUZZ`);
        console.log(i); //debug
    }
}