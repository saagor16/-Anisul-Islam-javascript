//promise part-1

//Promise Creation

const myPromise = new Promise((resolve, reject) => {
    const success = true; // অপারেশনের সফলতা বা ব্যর্থতার অবস্থা

    if (success) {
        resolve("Operation was successful!");
    } else {
        reject("Operation failed!");
    }
});

myPromise
    .then(result => {
        console.log(result); // Output: Operation was successful!
    })
    .catch(error => {
        console.log(error); // Output: Operation failed!
    });

//Promise with Asynchronous Task
function fetchData() {
    return new Promise((resolve, reject) => {
        console.log("Fetching data...");

        setTimeout(() => {
            const success = true; // ডেটা সফলভাবে পাওয়া গেছে কিনা তা নির্দেশ করে

            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data.");
            }
        }, 2000); // 2 সেকেন্ড সময় নিয়ে ডেটা আনছে
    });
}

fetchData()
    .then(result => {
        console.log(result); // Output after 2 seconds: Data fetched successfully!
    })
    .catch(error => {
        console.log(error); // Output if failed: Failed to fetch data.
    });


//Real-World Example: API Call with Promise
function getUserData() {
    return new Promise((resolve, reject) => {
        const requestSuccess = true; // API কল সফল হলে true হবে

        setTimeout(() => {
            if (requestSuccess) {
                resolve({ name: "Alice", age: 25 });
            } else {
                reject("Could not fetch user data.");
            }
        }, 1000);
    });
}

getUserData()
    .then(user => {
        console.log("User fetched:", user); // Output: User fetched: { name: 'Alice', age: 25 }
    })
    .catch(error => {
        console.log(error); // Output: Could not fetch user data.
    });
