const name="lucky"
const repoCount=50
// console.log(name + repoCount +  " value");
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String('lucky_ch')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('y'));
const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);
const newStringOne= "  lucky   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://lucky.com/lucky%20chauhan"
console.log(url.replace('%20','_'));
console.log(url.includes('luck'));

console.log(gameName.split('_'));








