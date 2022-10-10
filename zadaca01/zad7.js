function usporedi(obj1, obj2){
    if(Object.keys(obj1).length == Object.keys(obj2).length && Object.keys(obj1).every((x , i) => x === Object.keys(obj2)[i])){
        return true;
    }
    return false;
}
console.log(usporedi({a:1,b:2,c:3}, {a:321,b:3,c:1}));
