/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str){
  let v= str.split("");
  let a= str[0];
  for(let i=0; i<str.length; i++){
    if(a==str[i]){
      return true;
    }else {
      return false;
    }
  }
}
let str= "nan";
console.log(isPalindrome(str));

module.exports = isPalindrome;
