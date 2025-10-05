// challenge:
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

//solved:
function descendingOrder(n) {
  //i need to loop thru all the numbers and rearrange number from highest to lowest
  //issue is: this is not a loop its a number
  //i would use the .sort method to rearrange
  //sort(-1)
  return parseInt(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

//another option:

// function descendingOrder(n){
//    //i need to loop thru all the numbers and rearrange number from highest to lowest
//   //issue is: this is not a loop its a number
//   //i would use the .sort method to rearrange
//   //sort(-1)
//    return parseInt(n.toString().split('').sort((a,b) => b-a).join(''))
// }

function descendingOrder(n) {
  let newString = n.toString();
  let newArray = [];
  //123 --> "123" [1,2,3]
  for (let i = 0; i < newString.length; i++) {
    newArray.push(Number(newString[i]));
  }
  //i = 1, j = 2. i is = J,
  for (let i = 0; i < newArray.length; i++) {
    for (let j = i + 1; j < newArray.length; j++) {
      if (newArray[i] < newArray[j]) {
        let temp = newArray[i];
        console.log(temp, "test");
        newArray[i] = newArray[j];
        newArray[j] = temp;
      }
    }
  }
  console.log(newArray);
  let result = 0;

  //[3,2,1] --> 321
  //for loop
  for (let i = 0; i < newArray.length; i++) {
    result = result * 10 + Number(newArray[i]);
    console.log(result);
    //3 - result now contains 3
    //3* 10 = 30 + 2 = 32
    //32 * 10 = 320 + 1 = 321
  }
  return result;
}
