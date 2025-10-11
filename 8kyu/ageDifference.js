// //challenge: At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

//solved using two options:

function differenceInAges(ages) {
  //using method option
  // let oldest = Math.max(...ages)
  // let youngest = Math.min(...ages)
  // let difference = oldest - youngest

  //result: ageDifference array [youngest, oldest, difference]
  //   return [youngest, oldest, difference];
  //need to know the oldest and youngest
  //need a variable to point at oldest and youngest pointing at 0 index
  //start at index 1 then do if statement our age or [i] is less than youngest if you are take that index and become new one

  //method of loop
  let oldest = ages[0];
  let youngest = ages[0];
  //visualization of array example: [82, 15, 6, 38, 35]
  //both is going to start at 82
  for (let i = 1; i < ages.length; i++) {
    if (ages[i] < youngest) {
      youngest = ages[i];
    }
    if (ages[i] > oldest) {
      oldest = ages[i];
    }
  }
  let difference = oldest - youngest;
  return [youngest, oldest, difference];
}
