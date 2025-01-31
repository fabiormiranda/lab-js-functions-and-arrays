// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(n1, n2) {
    if (n1 > n2) {
       return n1; 
    } else {
        return n2;
    }
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) {
        return null;
      }
    
      let longestWord = "";
    
      for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
          longestWord = words[i];
        }
      }
      return longestWord;
    }

console.log(findLongestWord(words));

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(nms){
    let sum = 0;
    if (nms.length == 0){
        sum = 0;
    }
    for (let i = 0; i < nms.length; i++){
        sum += nms[i];
    }
    return sum ;
}

console.log(sumNumbers(numbers));

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    if (numbers.length === 0) return 0;

    return sumNumbers(numbers) / numbers.length;
}

console.log(sumNumbers(numbers2) / numbers2.length);

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, wordToFind) {
    if (words.length === 0) return null;
    if (words.includes(wordToFind)) return true;
    else return false;
}

console.log(doesWordExist(words2, "machine"));
console.log(doesWordExist(words2, "drink"));