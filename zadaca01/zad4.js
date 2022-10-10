function cammelCase(str){
    while(str.indexOf(" ") != -1){
        var place = str.indexOf(" ");
        str = str.slice(0,place)+str.charAt(place+1).toUpperCase()+str.slice(place+2,str.length);
    }
    return str;
}
console.log(cammelCase("cammel case for the win"));