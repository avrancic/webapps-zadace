function djeljiviS3(polje){
    var novoPolje = [];
    var returnString = "";
    polje.forEach(element => {
        if(element % 3 == 0){
            novoPolje.push(element);
            returnString += element+",";
        }
    });
    returnString = returnString.slice(0,returnString.length-1);
    return "[" + polje + "] -> Brojevi djeljivi s 3: "+returnString;
}
console.log(djeljiviS3([1,2,3,4,5,6,7,9,12,18,27,33,31]));