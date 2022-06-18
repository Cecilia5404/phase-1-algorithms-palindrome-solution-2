function isPalindrome(word) {
  // Write your algorithm here
  let rightIndex = 0;
  let leftIndex = word.length - 1;

  while(rightIndex < leftIndex) {
    if (word [rightIndex] !== word[leftIndex]) {
      return false;
}
rightIndex++;
    leftIndex--;
  }
  return true;
}
function pali(word){

}


//Add your pseudocode here

/*
  Add written explanation of your solution here
*/
 if (require.main === module) {

 }
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
module.exports = isPalindrome;
