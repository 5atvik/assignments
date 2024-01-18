/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    function countVowles(str){
  let vowles = ['a','e','i','o','u'];
   let count = 0;
  for(let i = 0; i < str.length; i++){
    if(vowles.includes(str[i])){
       count++;
    }
  }
    return count;
  
}
let str = "hello";
console.log(countVowles('hello'));
}

module.exports = countVowels;
