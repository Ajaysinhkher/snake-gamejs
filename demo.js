function addNumbers(...num){
    let sum = 0;
        
    for(let element of num){
        sum += element;
    }
    return sum;
}

console.log(addNumbers(1,2,3));