// challenge: Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

//solved

var number = function (array) {
  //your awesome code here
  //array of string --> array ["1: a"]
  //loop through the array / length
  //new array to contain the output
  //access those index concatenate the number,:, string return line 6
  let newFormat = [];
  for (let i = 0; i < array.length; i++) {
    //a,b,c
    //expecting "1: a"
    //     1 + ": " + a
    newFormat.push(i + 1 + ": " + array[i]);
  }
  return newFormat;
};
