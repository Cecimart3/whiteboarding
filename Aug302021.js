// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// Ceci
const XO = str => {
    let letters = str.toLowerCase().split('');
    return letters.filter(x => x === 'x').length === letters.filter(o => o === 'o').length
  }

// Jek
function XO(str) {
    return !str.toLowerCase().split('').reduce((acc, curr) => {
      switch(curr) {
          case 'x':
            return acc + 1;
          case 'o':
            return acc - 1;
          default:
            return acc;
      }
    }, 0)
}
  
// i like
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.


// Ceci & Jek
const friend = friends => friends.filter(friend => friend.length === 4)


// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:

// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect square

// Ceci
const findNextSquare = num => {
    let x = Math.sqrt(num);
    let y = x + 1;
    
    return Number.isInteger(x) ? y*y : -1
  }

  // Jek
  function findNextSquare(sq) {
    return Number.isInteger(Math.sqrt(sq)) ? (Math.sqrt(sq)+1)  : -1
  }

// i like
function findNextSquare(sq) {
    var root = Math.sqrt(sq);
    return root % 1 ? -1 : Math.pow(root + 1, 2) ;
  }

  function findNextSquare(sq) {
    return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
  }

//   Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

const countSheeps = arrayOfSheeps => arrayOfSheeps.filter(sheep => sheep === true).length

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
    return +(num.toString().split('').map(num => num * num).join(''))
  }