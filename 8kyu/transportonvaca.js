// //problem
// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

// solution

function rentalCarCost(d) {
  // 2
  let x = 0;
  //base off scenario I would do a if else statement
  //if over 7+ days then minus $50
  if (d >= 7) {
    x = d * 40 - 50;
    console.log("over 7 days " + x);
  } else if (d >= 3) {
    x = d * 40 - 20;
    console.log("over 3 days " + x);
  } else {
    x = d * 40;
    console.log("under 3 days " + x);
  }
  return x;
  //else if day 3-6 (less than 7) minus $20 off total
  //else daily cost * days (less than 3 days)
  // Your solution here
}
