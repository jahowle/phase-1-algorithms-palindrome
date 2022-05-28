function isPalindrome(word) {
  // Write your algorithm here
  if (word.length % 2 == 0) {
    for (let i = 0; i <= (word.length / 2) - .5; i++) {
      if (word.charAt(i) === word.charAt(word.length - i - 1)){
        return true
      } else {
        return false
      }
    }
  } else {
    for (let i = 0; i <= (word.length / 2) - .5; i++) {
      if (word.charAt(i) === word.charAt(word.length - i - 1)){
        return true
      } else {
        return false
      }
    }
  }

}

/* 
  The first thing the function should do is determine if the string is even or odd in length
  To do this
  If the string is even, get the first letter and the last letter and compare them
  If the result is true, move to the second letter and the second to last letter and compare them
  If true, continue this process until "i" is equal to half the string length
  If the string is odd complete the same steps except quit the loop once "i" is equal to half the string length mine .5
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
