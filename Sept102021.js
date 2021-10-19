// Description:
// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

//Ceci
const SeriesSum = n => {
    const numbers = new Array(n)
    return numbers.fill(null).reduce((acc, curr, i) => acc + 1/(i*3+1), 0).toFixed(2)
  }

//Jek
let sum = 0;
for (let i=0; i<n; i++) {
  sum += 1/(1+(i*3));
}
return sum.toFixed(2);

//Ceci
const countVowels = word => {
	const vowels = ['a', 'e', 'i', 'o', 'u']
	return word.toLowerCase().split('').filter(l => vowels.includes(l)).length
}

console.log(countVowels('aeisdfoui'))

//Jek
//anagram
function anagram(word1, word2) {
	return word1.split('').sort().every((letter, idx) => letter === word2[idx]);
}
  
