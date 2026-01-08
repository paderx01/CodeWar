// //challenge:
// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

//solved:
function litres(time) {
  //1 hour = .5 litre
  //2 hour = 1 litre
  //0.5 l * hour
  //combine time * 0.5
  //return use math.floor()
  return Math.floor(time * 0.5);
}
