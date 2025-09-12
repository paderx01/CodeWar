//problem to solve//
//Given an array of integers, return a new array with each value doubled.

//For example:
//[1, 2, 3] --> [2, 4, 6]//

//solved solution//

function maps(x) {
  //[1,2,3]
  //for loop, multiply by 2, create a new loop and push method, need a variable to hold the new array
  let newArray = [];
  for (let i = 0; i < x.length; i++) {
    //need to multiply by 2. then store new array
    newArray.push(x[i] * 2);
  }
  return newArray;
}
