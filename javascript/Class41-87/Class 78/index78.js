//Synchronous vs Asynchronous

// Synchronous Programming
console.log("Start");

function syncTask() {
    for (let i = 0; i < 5; i++) {
        console.log("Executing task:", i);
    }
}

syncTask();

console.log("End");


//Asynchronous Programming
console.log("Start");

function asyncTask() {
    setTimeout(() => {
        console.log("Asynchronous task completed");
    }, 2000); // Delay of 2 seconds
}

asyncTask();

console.log("End");

//1. Callbacks
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 2000);
}

console.log("Start");
fetchData(() => console.log("Process data"));
console.log("End");

// 2. Promises

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 2000);
});

console.log("Start");
myPromise.then(result => console.log(result));
console.log("End");
Output:

// 3. Async/Await

async function fetchData() {
    let myPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched with async/await");
        }, 2000);
    });
    let result = await myPromise;
    console.log(result);
}

console.log("Start");
fetchData();
console.log("End");



