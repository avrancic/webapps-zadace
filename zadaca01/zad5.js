function visekratnik(broj){
    if(broj < 0 || broj > 1000){
        return "Broj se ne nalazi unutar granica 0-1000";
    }
    var umnozak = 1;
    var pomBroj = 7;
    while(pomBroj <= broj){
        umnozak *= pomBroj;
        pomBroj+=7;
    }
    return broj + "->" + umnozak;
}
console.log(visekratnik(23));