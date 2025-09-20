//problem to solve: Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  //store bmi --> create a 'box' such as let bmi = weight / height2
  let bmi = weight / (height * height);
  //base off they wanted me to show I will want to do an if else else if loop
  //parameter is weight and height
  //if() {};
  if (bmi <= 18.5) {
    return "Underweight";
  }
  //else if() {}
  else if (bmi <= 25.0) {
    return "Normal";
  }
  //else if() {};
  else if (bmi <= 30.0) {
    return "Overweight";
  }
  //else (){console.log("Obese")}
  else {
    return "Obese";
  }
}
