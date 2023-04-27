// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
// describe("storyTime", () => {
//   const people = [
//     { name: "ford prefect", occupation: "a hitchhiker" },
//     { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//     { name: "arthur dent", occupation: "a radio employee" }
//   ]
//   it(" Function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
//     expect(storyTime(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
//   })
// })

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.
// Puesdo Code:
// Create the function called story time to match the test.
// Give the funciton one parameter called array to match data that will be passed in.
//
// const storyTime = (array) => {
//     newArray = array.name.split(" ")
//     newArray.map(value => {
//       value.charAt(0).toUpperCase()
//     })
//     // newArray.join("")
//     // return ${array.name}
// }
// const people = [
//   { name: "ford prefect", occupation: "a hitchhiker" },
//   { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//   { name: "arthur dent", occupation: "a radio employee" }
// ]
// console.log(storyTime(people))

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
describe("onlyNumbers", () => {
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  // Expected output: [ 2, 0, -1, 0 ]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  // Expected output: [ 2, 1, -1 ]
  it("Function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. ", () => {
    expect(onlyNumbers(hodgepodge1)).toEqual([2, 0, -1, 0])
    expect(onlyNumbers(hodgepodge2)).toEqual([2, 1, -1])
  })
})

// b) Create the function that makes the test pass.
//Puesdo Code:
//Create the function called onlyNumbers to match the test
// Give the test one parameter called "arr" to match the data being passed in later as an argument.
// Use the .filter method to iterate through the array and check the typeof value that is in each index.
// make the typeof === 'number' so only numbers are in the new array.
// Stack .map() to the end of that to iterate again through this new array.
// take the value % 3 to find the remainder of the numbers.
// return the new array.

const onlyNumbers = (arr) => {
  const newArray = arr
    .filter((value) => typeof value === "number")
    .map((num) => num % 3)
  return newArray
}

// PASS  ./code-challenges.test.js
//   onlyNumbers
//     ✓ Function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.  (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
describe("cubeItAddIt", () => {
  const cubeAndSum1 = [2, 3, 4]
  // Expected output: 99
  const cubeAndSum2 = [0, 5, 10]
  // Expected output: 1125
  it("Function that takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(cubeItAddIt(cubeAndSum1)).toEqual(99)
    expect(cubeItAddIt(cubeAndSum2)).toEqual(1125)
  })
})

// b) Create the function that makes the test pass.
