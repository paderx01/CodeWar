
// task/challenge
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

//solved below

function highAndLow(numbers){
  let newNums = numbers.split(" ")
  let highest = newNums[0]
  let lowest = newNums[0]
  for (let i = 0; i < newNums.length; i++ ){
    newNums[i] = Number(newNums[i])
  }
//loop thru using for loops, then check 
  for (let i = 1; i < newNums.length; i++) {
    if (newNums[i] > highest) highest = newNums[i]
    if (newNums[i] < lowest) lowest = newNums[i]
  }
  return highest + ' ' + lowest
}
