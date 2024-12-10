// Q: 13
// Title:
// L1 - Grouping and Summing with reduce()

// Problem Statement:
// You are given an array of strings representing product categories. 
// Your task is to use reduce() to create an object that counts the occurrences of each category in the array.

// Steps:
// Use reduce() to group the categories and count how many times each category appears.
// Return the resulting object.
// Example:

// Input: ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]

// Output: { electronics: 2, clothing: 2, toys: 3 }

// Extra Challenge: After creating the object, 
// use Object.entries() and sort() to sort the categories by their counts in descending order 
// and return an array of sorted categories.


function processStudents(array)
{
    let ans1 = array.reduce((acc, ele) => {
        acc[ele] = (acc[ele] || 0) + 1
        return acc}
    ,{})

    let ans2 = Object.entries(ans1);
    let ans3 = ans2.sort((a, b) => b[1] - a[1]);
    return ans3;
}

let arr = ["electronics", "clothing", "electronics", "toys", "clothing","clothing", "toys", "toys", "toys"];

console.log(processStudents(arr));