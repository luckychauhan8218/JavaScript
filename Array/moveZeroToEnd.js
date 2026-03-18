let arr = [0,1,0,3,12];

let result = [];

for(let num of arr){
    if(num !== 0){
        result.push(num);
    }
}

let zeroCount = arr.length - result.length;

while(zeroCount--){
    result.push(0);
}

console.log(result);