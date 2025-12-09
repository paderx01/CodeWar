// challenge below 

//Given a string and an array of indices, rearrange the characters of the string so that each character is placed at the position specified by the corresponding index in the array.

// Example
// input: "abcd", [0, 3, 1, 2]
// output: "acdb"
// Explanation
// The character 'a' is placed at index 0.

// The character 'b' is placed at index 3.

// The character 'c' is placed at index 1.

// The character 'd' is placed at index 2.

// Notes
// The string and the array will be of equal length.

// The string will contain valid characters (A-Z, a-z, or 0-9);
// the array will contain valid indices.

//solved below:

function scramble(str, arr) {
//   return str; 
 //rearrange the string to be in the array that theyve set out for us 
  //create new box to hold new str of array = newOrder 
  //for loop for the string
  //for loop: logic ()
  //then compare to the arr 
  let results = []
  for (let i = 0; i <str.length; i++) {
   //logic: 
    //looping. thru abc, look at indecy A, which is at 0, then look at array if there's any 0 
//     in the array, if so then take the place of the str array
    //comparing two stuff together 
//     [i] = [arr[i]]
    results[arr[i]] = str[i]
  } 
  return results.join("")
};