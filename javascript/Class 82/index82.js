//async await javascript

//async await javascript
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data.");
            }
        }, 2000);
    });
}

async function getData() {
    try {
        const result = await fetchData();
        console.log(result); // Output: Data fetched successfully! (after 2 seconds)
    } catch (error) {
        console.log(error); // যদি প্রমিজ ব্যর্থ হয়
    }
}

getData();

// Multiple await Statements
async function processTasks() {
    try {
        const task1 = await new Promise(resolve => setTimeout(() => resolve("Task 1 done!"), 1000));
        console.log(task1);

        const task2 = await new Promise(resolve => setTimeout(() => resolve("Task 2 done!"), 2000));
        console.log(task2);

        const task3 = await new Promise(resolve => setTimeout(() => resolve("Task 3 done!"), 1000));
        console.log(task3);
    } catch (error) {
        console.error("Error:", error);
    }
}

processTasks();
// Output:
// Task 1 done! (after 1 second)
// Task 2 done! (after 2 seconds)
// Task 3 done! (after another 1 second)


//Fetch API with async / await
async function fetchUserData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const user = await response.json();
        console.log("User data:", user);
    } catch (error) {
        console.error("Failed to fetch user data:", error);
    }
}

fetchUserData();

