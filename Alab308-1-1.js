// Part 1: Math Problems


// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);



//========= Check if all numbers are divisible by 5. Cache the result in a variable.=======================


let c1 = n1%5;
let c2 = n2%5;
let c3 = n3%5;
let c4 = n4%5;

console.log("N1 is divisible by 5" ,( n1%5 ) == 0);
console.log("N1 is divisible by 5" ,(n2%5) == 0);
console.log("N1 is divisible by 5" ,(n3%5) == 0);
console.log("N1 is divisible by 5" , (n4%5) == 0);

//=============Check if the first number is larger than the last. Cache the result in a variable.

console.log("");
let check1 = n1 > n4;
console.log("N1 is > than n4", check1);



/* ==================================================
Accomplish the following arithmetic chain:
Subtract the first number from the second number.
Multiply the result by the third number.
Find the remainder of dividing the result by the fourth number.
*/

console.log('');
let check2 = n1 - n2;
let check3 = check2*n3;
let check4 = check3%n4;

console.log("n1 - n2 is = " , check2);
console.log("(n1 - n2) *n3 is = " , check3);
console.log("((n1 - n2)*n3)%n4 is = " , check4);

//Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
//const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log("");

const isNotOver25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log("const is not over 25 ",isNotOver25);






//Part 2: Practical Math ===================================
console.log('');
let distance = 1500;
let budget = 175;
let fuel =3;

let tripCost = distance/fuel;

//Determine how many hours each trip will take
let trip1Time = (distance/55);
let trip2Time = (distance/60);
let trip3Time = (distance/75);

//Determine the cost of each trip
let tripCost1 = trip1Time *( 30/fuel);
let tripCost2 = trip2Time *(28/fuel);
let tripCost3 = trip3Time *(23/fuel);


console.log("The trip cost is ",tripCost);
console.log("Lets see if this trip is in your budget ");
console.log("Can you go on Trip1? ", tripCost1 > budget);
console.log("Can you go on Trip2? ", tripCost2 > budget);
console.log("Can you go on Trip3? ", tripCost3 > budget);
console.log( "... Did you seriously think you had the budget for trip 3");


console.log("");
console.log("Trip 1 will take " , trip1Time  , " hours");
console.log("Trip 2 will take " , trip2Time  , " hours");
console.log("Trip 3 will take " , trip3Time  , " hours");
console.log("not that trip 3 matters, you can't really afford it, now can you?");