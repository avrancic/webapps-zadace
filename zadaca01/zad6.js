function flip(polje){
    return "["+polje + "]" + "->" + "["+ polje.reverse() + "]";
}
console.log(flip([1,2,3,4,5,6,7,8]));