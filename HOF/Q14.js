// Q: 14
// Title:
// L1 - Employee Performance Evaluation System

// Filter the employees who have completed more than 5 tasks.
// Map the filtered employees to a new array that contains only the employee's name and their performance level.
// The performance level is determined by the following criteria:

// If rating is above 4.5, their performance level is "Excellent".
// If rating is between 3 and 4.5 (inclusive), their performance level is "Good".
// Otherwise, their performance level is "Needs Improvement".

// Sort the final array of employees in descending order based on their performance level, prioritizing "Excellent",
//  then "Good", and finally "Needs Improvement".
// Return the final sorted array containing the employee names and their performance levels.

// Output: [

// { name: "David", performance: "Excellent" },

// { name: "Alice", performance: "Excellent" },

// { name: "Charlie", performance: "Good" }

// ]

// Explanation:
// Bob and Eve are excluded because they did not complete more than 5 tasks.
// David and Alice are marked as "Excellent" due to their high ratings, while Charlie is marked as "Good".



function empEval(array) {
    let ans1 = array.filter((ele) => (ele.tasksCompleted > 5 && ele.rating > 3) ? ele : null);
    let ans2 = ans1.sort((a,b) => b.rating-a.rating);

    let ans3 = ans2?.map((ele, index) => {
        return ele.rating > 4.5 ? { name: ele.name, performance: "Excellent"} 
        : ele.rating > 3 && ele.rating <= 4.5 ? { name: ele.name, performance: "Good" } :
         { name: ele.name, performance: "Needs Improvement"}

    });


    return ans3;
}


let arr = [
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }];

console.log(empEval(arr));

