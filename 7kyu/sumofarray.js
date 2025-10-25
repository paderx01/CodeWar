// //challenge:
// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

//solved:
function repeats(arr) {
  //need to access the array then loop through it, and check with .length
  //need to get the total
  let total = 0;

  //[4,5,7,5,4,8] = 15 (only 7 & 8)
  //=4 = 1, 5 =1 + 1
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    //comparing to [0]
    //creating a for loop to compare
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count == 1) {
      //if they show up once then add to total
      total += arr[i];
    }
  }
  return total;
}
