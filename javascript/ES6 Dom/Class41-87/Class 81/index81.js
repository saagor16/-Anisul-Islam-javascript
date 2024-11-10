//promise part-2 | promise chaining

//Basic Example of Promise Chaining
const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10); // প্রথম প্রমিজে ১০ পাঠাচ্ছে
    }, 1000);
});

firstPromise
    .then(result => {
        console.log("First result:", result); // Output: First result: 10
        return result * 2; // ১০ কে ২ দিয়ে গুণ করে পরবর্তী চেইনে পাঠাচ্ছে
    })
    .then(result => {
        console.log("Second result:", result); // Output: Second result: 20
        return result + 5; // ২০ এর সাথে ৫ যোগ করে পরবর্তী চেইনে পাঠাচ্ছে
    })
    .then(result => {
        console.log("Third result:", result); // Output: Third result: 25
        return result - 3; // ২৫ থেকে ৩ বিয়োগ করে পরবর্তী চেইনে পাঠাচ্ছে
    })
    .then(result => {
        console.log("Final result:", result); // Output: Final result: 22
    })
    .catch(error => {
        console.log("Error:", error); // যদি কোনো প্রমিজ ব্যর্থ হয়
    });


// API Data Fetching with Promise Chaining
function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching user data...");
            resolve({ name: "Alice", age: 25 });
        }, 1000);
    });
}

function getUserPosts(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetching posts for ${user.name}`);
            resolve(["Post 1", "Post 2", "Post 3"]);
        }, 1000);
    });
}

function getUserComments(posts) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching comments for posts...");
            resolve(["Comment 1", "Comment 2"]);
        }, 1000);
    });
}

// Chaining Promises
getUserData()
    .then(user => {
        console.log("User data received:", user);
        return getUserPosts(user); // ইউজারের পোস্ট আনার প্রমিজ
    })
    .then(posts => {
        console.log("User posts:", posts);
        return getUserComments(posts); // পোস্টের কমেন্ট আনার প্রমিজ
    })
    .then(comments => {
        console.log("User comments:", comments);
    })
    .catch(error => {
        console.error("Error:", error);
    });









