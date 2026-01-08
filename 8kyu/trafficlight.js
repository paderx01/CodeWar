//challenge:
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

//solution
function updateLight(current) {
  //if green then yellow
  //if yellow then red
  //if red then green
  //i can turn these string into an array
  //then access these with an if and return the color thats on display
  //your code here below
  let light = ["yellow", "red", "green"];
  if (light[0] == current) {
    return "red";
  } else if (light[1] == current) {
    return "green";
  } else {
  }
  return "yellow";
}
