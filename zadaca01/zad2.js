function pretvoriUSate(x){
    var sati = Math.floor(x/60);
    var minute = x % 60;
    return x + " -> Ovo je "+sati+" sata i " + minute + " minuta";
}
console.log(pretvoriUSate(134));