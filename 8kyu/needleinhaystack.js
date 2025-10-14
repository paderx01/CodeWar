//challenge to solve:
// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

//solved:
function findNeedle(haystack) {
  // your code here
  //accessing array
  //i need it to loop through the array to find the string "needle"
  //if and then they find the string "needle", need to return index position
  //[a, 2, "needle"]
  for (let i = 0; i <= haystack.length; i++) {
    if (haystack[i] === "needle") {
      return "found the needle at position " + i;
    }
  }
}
