// STRING REVERSAL FUNCTION

function revStr(word) {
  let revWord = "";
  for (let index = word.length - 1; index >= 0; index--) {
    revWord += word[index];
  }
  console.log(revWord);
}

revStr("Dayton");

// OR

function reverseWord(theWord) {
  let rev_word = theWord.split("").reverse().join("");
  console.log(rev_word);
}

reverseWord("Hello World");

// Count Characters

function countChr(words) {
  let nospace = words.replace(/\s+/g, "");
  let wordCount = nospace.length;
  console.log(wordCount);
}

countChr("Hello World, How Are You Doing?");

// Capitalize Words
function upWord(sentence) {
  return (
    sentence
      // Split the sentence into an array of words
      .split(" ")
      // capitalize the first letter of each word
      .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1))
      // Join the array back into a single string
      .join(" ")
  );
}
console.log(upWord("how are you doing today?"));

// MIN AND MAX

function minMax(result) {
  let new_arr = result.sort((a, b) => a - b);

  return [new_arr[0], new_arr[new_arr.length - 1]];
}

console.log(minMax([23, 23, 45, 63, 33, 59, 444, 211, 22]));

//  SUM OF ARRAY

function arrSum(numArray) {
  let sum = 0;
  for (let index = 0; index < numArray.length; index++) {
    sum = sum + numArray[index];
  }
  return sum;
}

console.log(arrSum([23, 23, 45, 63, 33, 59, 444, 211, 22]));

// FILTER WORDS WITH CONDITION

let words = [
  "joy",
  "bless",
  "news",
  "and",
  "cold",
  "wilder",
  "meet",
  "android",
];

function filterWords() {
  newWords = words.filter((word) => word.length <= 4);
  return newWords;
}
console.log(filterWords());

function sevenBoom(arr) {
  let str = arr.toString();

  str.split(" ");

  if (str.includes(7)) {
    return "!BOOM";
  }
  return false;
}

console.log(sevenBoom([23, 23, 45, 63, 33, 59, 444, 211, 27]));

// FACTORIAL

function fact(numb) {
  let result = 1;

  for (let index = 1; index <= numb; index++) {
    result = result * index;
  }

  return result;
}

console.log(fact(5));

// Prime Number Check

function primeCheck(numbs) {
 if (numbs <= 1){
  return `false this is not a prime number`;
 }
 for (let index = 2; index <= Math.sqrt(numbs); index++) {
  if(numbs % index == 0){
    return `false this is not a prime number`;
  }
 }
 return `true this is a prime number`;
}

console.log(primeCheck(7)); 


// Fibonacci Sequence

function fibSq(numb_) {
  if (numb_ <= 0) return [];
  if (numb_ === 1) return [0];

  let fibSequence = [0, 1]; // Start with the first two Fibonacci numbers

  for (let i = 2; i < numb_; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]); // Sum the last two numbers
  }

  return fibSequence;
}

console.log(fibSq(30));
