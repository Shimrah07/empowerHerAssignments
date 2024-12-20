// Q: 20
// Assignment Questions on Closures
// Question 1: Closure-Based Counter Implementation
// Write a function createCounter that uses closures to create a simple counter. The function should:

// Allow incrementing the counter.
// Allow decrementing the counter.
// Display the current count.
// The function should not expose the counter variable directly to the outside world.

// Example Usage:

// const counter = createCounter();
// counter.increment(); // Output: Current count: 1
// counter.increment(); // Output: Current count: 2
// counter.decrement(); // Output: Current count: 1

// Tasks:

// Implement the createCounter function.
// Explain how closures are being used to encapsulate the counter variable.
// What happens if multiple counters are created using the same function? Provide examples to demonstrate this behavior.

function createCounter() {
    let count = 0;

    return {
        increment: function () {
            count++;
            console.log(count);
        },

        decrement: function () {
            count--;
            console.log(count);
        }
    }
}

const count = createCounter();
count.increment();
count.increment();
count.decrement();




// Question 2: Simulating Private Variables with Closures
// Create a function createBankAccount that simulates a simple bank account using closures. The function should:

// Allow deposits to be made to the account.
// Allow withdrawals from the account, but only if there is sufficient balance.
// Allow checking the current balance.
// Prevent direct access to the balance variable from outside the function.
// Example Usage:

// const account = createBankAccount();
// account.deposit(500); // Output: Deposited: 500
// account.withdraw(200); // Output: Withdrawn: 200
// account.withdraw(400); // Output: Insufficient balance
// console.log(account.balance); // Output: undefined
// Tasks:

// Implement the createBankAccount function.
// How does the closure ensure that the balance variable is private?
// Modify the function to include a transactionHistory feature that stores all transactions and explain how closures enable this feature.


function createBankAccount() {
    let myAccount = { name: "Shimrah", balance: 0 };

    return {
        deposit: function (amt) {
            myAccount.balance = amt;
            console.log(`Deposited: ${myAccount.balance}`);
        },

        withdraw: function (amt) {
            
            if (myAccount.balance >= amt){
                myAccount.balance = myAccount.balance - amt;
                console.log("Withdrawn: " + amt)
            } 
            
            else {

                (console.log(`Insufficient balance`));
            }
        },

        checkBalance: function () {
            console.log(`Balance: ${myAccount.balance}`);
        }
    }
}


const account = createBankAccount();
account.deposit(500);
account.withdraw(200);
account.withdraw(400);
account.checkBalance();
// console.log(account.balance);
