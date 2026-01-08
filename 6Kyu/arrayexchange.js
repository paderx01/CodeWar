// Challenge:
// Array Exchange and Reversing

// It's time for some array exchange! The objective is simple: exchange the elements of two arrays in-place in a way that their new content is also reversed. The arrays may be of unequal lengths, in which case you will have to expand the shorter one in-place.

// # before
// my_array = ['a', 'b', 'c']
// other_array = [1, 2, 3]

// exchange_arrays(my_array, other_array)

// # after
// my_array == [3, 2, 1]
// other_array == ['c', 'b', 'a']

//solved below:

function exchangeWith(a, b) {
  // your code here
   //2 new variable to hold new the 'new array' (A becomes b in reversed), (B becomes A in reversed)
  //access the array [], loop through it -1 (to turn into reversal)
  //need push method for array 
  //1,2,3 --> 3,2,1 
  let firAr = [];
  let secAr = [];
  
  for (let i = a.length - 1; i >= 0; i--) {
    firAr.push(a[i])
  };
  
  for (let i = b.length -1; i >=0; i--) {
    secAr.push(b[i]) 
  };
  
  //use the length to push it back to a & b 
  a.length = 0;
  b.length = 0;
  for (let i = 0; i < secAr.length; i++){
    a.push(secAr[i])
  }; 
  for (let i=0; i < firAr.length; i++){
    b.push(firAr[i])
  }
   
} 