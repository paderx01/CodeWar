//code challenge:

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

//solved below 
function openOrSenior(data){
  // its an array of data that holds a set of arrays within 
  //loop through the array of data 
  //loop through the set of in side the array 
  
  //sets of arrays in side the main array
  //set of array: check both nums: [ages, years]
  //condition: to check that set of arrays: ages >= 55, >=7 
  //logic: if meet condition show "senior" else return "open"
  let results = []
  for (let i = 0; i < data.length; i++){
    let ages = data[i][0]
    let handicap = data[i][1]
    if (ages >= 55 && handicap > 7){
      results.push("Senior")
    } else {
      results.push("Open")
    }  
  }
  return results
}