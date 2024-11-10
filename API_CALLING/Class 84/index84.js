//calling api from javascript | fetch api

// 1. XMLHttpRequest (Old Way)
console.log('Using XMLHttpRequest:');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
xhr.onload = () => {
  if (xhr.status === 200) {
    console.log('XMLHttpRequest Response:', JSON.parse(xhr.responseText));
  } else {
    console.error('Request failed');
  }
};
xhr.onerror = () => console.error('Network error');
xhr.send();


// 2. Fetch API (Using Promises)
console.log('\nUsing Fetch API (Promises):');
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log('Fetch API Response:', data))
  .catch(error => console.error('Error:', error));


// 3. Fetch API with Async/Await
console.log('\nUsing Fetch API (Async/Await):');
const makeRequestWithAsyncAwait = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    console.log('Async/Await Fetch API Response:', data);
  } catch (error) {
    console.error('Error:', error);
  }
};

makeRequestWithAsyncAwait('https://jsonplaceholder.typicode.com/posts');


// 4. Axios (Third-party Library)
console.log('\nUsing Axios:');

// You would need to install Axios using npm first: npm install axios
// Here's how you would use it:

// If you are using it in a Node.js environment, require axios like this:
// const axios = require('axios'); 

// Or if you are using it directly in the browser, you can add the axios CDN:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

// Example with Axios (ensure you have Axios installed):
// axios.get('https://jsonplaceholder.typicode.com/posts')
//   .then(response => console.log('Axios Response:', response.data))
//   .catch(error => console.error('Error:', error));

// To run this code with Axios in a Node.js or browser environment, uncomment the lines above and ensure Axios is installed and included.






