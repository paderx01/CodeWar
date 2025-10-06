//challenge: 
// //It's Friday night, and Chuck is bored. He's already run 1,000 miles, stopping only to eat a family sized bag of Heatwave Doritos and a large fistful of M&Ms. He just can't stop thinking about kicking something!

// There is only one thing for it, Chuck heads down to his local MMA gym and immediately challenges every fighter there to get in the cage and try and take him down... AT THE SAME TIME!

// You are provided an array of strings that represent the cage and Chuck's opponents. Your task, in traditional Chuck style, is to take their heads off!! Throw punches, kicks, headbutts (or more likely - regex or iteration...) but whatever you do, remove their heads. Return the same array of strings, but with the heads ('O') removed and replaced with a space (' ').

// If the provided array is empty, or is an empty string, return "Gym is empty". If you are given an integer, return "This isn't the gym!!".

// FIGHT!!


//solution/solved below:
function headSmash(array) {
    // This is gonna hurt!
    //[array of string]
    //should check if it is an integer /number 
    if (typeof array === "number") return "This isn't the gym!!"
    if (array.length === 0 || array[0]=== "" ) return "Gym is empty"
    //line 8 is another option//
    return array.map(a => a.replace(/O/g, " "))
    //above is using the "map" loop method 
    
  //   need to return a new array variable to hold 
  //   let newArray = []
  //   for (let i = 0; i < array.length; i++) {
  //   let newLine = array[i].replace(/O/g, " ")
  //   newArray.push(newLine)
  // //need push() 
  // }
  //   return newArray
  }