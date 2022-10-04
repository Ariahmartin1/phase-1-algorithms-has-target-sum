/*
function recieves two parameters, an array of numbers and a target number.
should return true if the sum of any two numbers in the array equal the target number.
should return false otherwise.
*/


function hasTargetSum(array, target) {
    const numbersObject = {};
    for (const number of array) {
      const targetDifference = target - number
      if (numbersObject[targetDifference]) return true;
      numbersObject[number] = true;
    }
    return false;
  }

/* 
  Write the Big O time complexity of your function here
*/

/* 
  create object 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([10, 0], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([25], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([8, -4], 4));
}

module.exports = hasTargetSum;
