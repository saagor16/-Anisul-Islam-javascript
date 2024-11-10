//calling api from javascript | XMLHttpRequest

console.clear();

// Event - onload(), onerror()
// Properties - response, responseText, responseType, responseURL, status, statusText
// Functions - open(), send(), setRequestHeader()

// XMLHttpRequest ব্যবহার করে HTTP রিকোয়েস্ট করার জন্য ফাংশন
const makeRequest = (method, url, data) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();  // নতুন XMLHttpRequest অবজেক্ট তৈরি
        xhr.open(method, url);  // মেথড এবং URL দিয়ে রিকোয়েস্ট ওপেন করা

        // রিকোয়েস্ট হেডার সেট করা, JSON ডেটার জন্য Content-Type নির্ধারণ
        xhr.setRequestHeader('Content-Type', 'application/json');

        // রেসপন্স সফল হলে onload ইভেন্ট ট্রিগার হয়
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) { // সফল রেসপন্স স্ট্যাটাস চেক করা
                resolve(JSON.parse(xhr.response));  // JSON ফরম্যাটে ডেটা রিটার্ন
            } else {
                reject(new Error(`Request failed with status ${xhr.status}`));
            }
        };

        // রিকোয়েস্ট ব্যর্থ হলে onerror ইভেন্ট ট্রিগার হয়
        xhr.onerror = () => {
            reject(new Error('Network error occurred'));
        };

        // ডেটা পাঠানো, যদি ডেটা না থাকে তবে null
        xhr.send(data ? JSON.stringify(data) : null);
    });
};

// GET Request: ডেটা রিটার্ন করা
const getData = () => {
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
};

getData();

// POST Request: নতুন ডেটা যোগ করা
const sendData = () => {
    makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

// PUT Request: সম্পূর্ণ ডেটা আপডেট করা
const updateData = () => {
    makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
        id: 1,
        title: 'fooMA',
        body: 'barMA',
        userId: 1,
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

// PATCH Request: আংশিক ডেটা আপডেট করা
const updateSingleData = () => {
    makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
        title: 'This is changed',
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

// DELETE Request: ডেটা ডিলিট করা
const deleteData = () => {
    makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => console.log("Deleted successfully"))
    .catch((err) => console.error(err));
};

// deleteData();  // Uncomment করলে ডেটা ডিলিট করবে


























//Basic Example of XMLHttpRequest
// 1. XMLHttpRequest অবজেক্ট তৈরি
const xhr = new XMLHttpRequest();

// 2. রিকোয়েস্ট ওপেন করা (GET মেথড এবং URL ব্যবহার করে)
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true); // true মানে অ্যাসিঙ্ক্রোনাস

// 3. রেসপন্স রিসিভ করার জন্য ইভেন্ট হ্যান্ডলার তৈরি
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        // রেসপন্স সফল হলে রেসপন্স ডেটা প্রসেস করা
        console.log(JSON.parse(xhr.responseText)); // JSON ফরম্যাটে রেসপন্স প্রিন্ট
    }
};

// 4. রিকোয়েস্ট পাঠানো
xhr.send();

//Error Handling and POST Request
const xhr = new XMLHttpRequest();

// POST রিকোয়েস্ট ওপেন করা
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

// রেসপন্স রিসিভ করা এবং এরর হ্যান্ডলিং করা
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log("Response received:", JSON.parse(xhr.responseText));
        } else {
            console.error("Error:", xhr.status, xhr.statusText);
        }
    }
};

// ডেটা পাঠানো
const data = JSON.stringify({
    title: "Hello World",
    body: "This is a sample post.",
    userId: 1
});
xhr.send(data);








