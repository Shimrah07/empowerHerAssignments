// Q: 12
// Title:
// L0 - Filter and Sort Data with Higher-Order Functions

// Problem Statement:
// You are given an array of student objects. Each student object contains a name and marks. 
// Write a function processStudents that performs the following steps:

// Filter the students to create a new array of students who scored above 60 marks.
// Sort the filtered array in descending order of marks.
// Map the sorted array to extract only the names of the students.
// Return the array of sorted names.
// Example:

// Output: ["Charlie", "Bob"]

function processStudents(array)
{
    let ans1 = array.filter((ele) => ele.marks > 60 ? ele : null);
    let ans2 = ans1.sort((a, b) => b.marks-a.marks);
    let ans3 = ans2.map((ele) => ele.name)
    return ans3;

}


let arr = [ 
    { name: "Alice", marks: 58 },
    { name: "Bob", marks: 85 },
    { name: "Charlie", marks: 92 },
    { name: "David", marks: 45 } ];
    
console.log(processStudents(arr));