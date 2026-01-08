//handle edge case of 0
//i need to access the array, so i would use a for loop so we know whats there
//i would use if else statement to identify the number is pos or neg after loop
function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];
  let positive = 0;
  let negative = 0;
  for (let i = 0; i < input.length; i++) {
    //if statement = if number is positive then increase count #
    //else if number is negative then sum / add
    //[5,10,-15]
    if (input[i] > 0) {
      //logic positive++
      positive++;
    } else if (input[i] < 0) {
      //logic negative - adding the value
      negative += input[i];
    } else {
    }
  }
  return [positive, negative];
}
