//challenge to solve:
// Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.

// Examples
// ["jo", "nelson", "jurie"] -->  ["Jo", "Nelson", "Jurie"]
// ["KARLY", "DANIEL", "KELSEY"] --> ["Karly", "Daniel", "Kelsey"]

// solved:
function capMe(names) {
  //loop through the array of names using map method, does not change original array
  //the first letter should be in cap (toUpperCase method)
  //using the slice method to slice/remove first letter
  //concatenate the array, slice method is remove the first letter, add everything
  //then lowercase
  return names.map(
    (name) => name[0].toUpperCase() + name.slice(1).toLowerCase()
  );
}
