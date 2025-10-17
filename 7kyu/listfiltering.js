//challenge:
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
  // Return a new array with the strings filtered out
  //ask: remove all strings, return just integreers (numbers)
  //figure out typeof
  //for loop - with the given array.length
  //if statement -- if you are a num go into new array box return array
  //   console.log(typeof(l[0]))
  let newList = [];
  for (let i = 0; i < l.length; i++) {
    //0
    //1
    if (typeof l[i] === "number") {
      //visual clue [1,2]
      newList.push(l[i]);
    }
  }
  return newList;
}
