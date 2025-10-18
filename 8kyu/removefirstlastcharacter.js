// challenge: Task
// Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.

// Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.

// Examples
// 'eloquent' --> 'loquen'
// 'country'  --> 'ountr'
// 'person'   --> 'erso'
// 'ab'       --> '' (empty string)
// 'xyz'      --> 'y'

//solved:
function removeChar(str) {
  //You got this!
  if (str.length <= 2) {
    return "";
  }
  let newStr = "";
  //happy --> "app"
  for (let i = 1; i < str.length - 1; i++) {
    newStr += str[i];
  }
  return newStr;
}
