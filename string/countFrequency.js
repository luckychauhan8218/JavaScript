let str = "aabbcc";
let freq = {};

for(let char of str){
    freq[char] = (freq[char] || 0) + 1;
}

console.log(freq);