// //challenge: Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

// S
// e
// r
// i
// e
// s
// :
// 1
// +
// 1
// 4
// +
// 1
// 7
// +
// 1
// 10
// +
// 1
// 13
// +
// 1
// 16
// +
// …
// Series:1+
// 4
// 1
// ​
//  +
// 7
// 1
// ​
//  +
// 10
// 1
// ​
//  +
// 13
// 1
// ​
//  +
// 16
// 1
// ​
//  +…
// You will need to figure out the rule of the series to complete this.

// Rules
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return "0.00".

// You will only be given Natural Numbers as arguments.

// Examples (Input --> Output)
// n
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

//solved:

function SeriesSum(n) {
  // Happy Coding ^_^
  //toFixed() method --> x.xx
  // 1 + 1/4 --> "1.25"
  //increase denominator by 3, need a "3"
  //1 + 1/4 = 1.25
  //1 + 1 = 2
  //1 / (1 + 3 * 0)
  //add previous number (which is 1) + new number (.25)
  //new variable to hold new number
  //for loop
  //   newNum += i;
  //   }
  //   return newNum;
  let newNum = 0;
  for (let i = 0; i < n; i++) {
    newNum += 1 / (1 + 3 * i);
  }
  return newNum.toFixed(2);
}
