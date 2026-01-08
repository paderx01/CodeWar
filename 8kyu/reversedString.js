//probelm to solve
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
  //need something to hold new string
  //create variable for new string
  let newWord = "";
  //loop through the world, process as negative (to go backward) on each character
  for (let i = str.length - 1; i >= 0; i--) {
    //d
    newWord += str[i];
    //string of i - is to save it dynamically
  }
  return newWord;
  //need to add d to the new variablem so variable can hold it //to do: how to access it backward//
  //return new variable as a string
}

// another option using method//
// function solution(str){
//   return str.split('').reverse().join('')
//   }
