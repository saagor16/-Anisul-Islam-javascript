//calling api from javascript | ajax jquery

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
const makeRequestWithAxios = async (config) => {
  try {
    const result = await axios(config);
    console.log('Axios Response:', result.data);
  } catch (error) {
    console.error('Error:', error);
  }
};

// Example for GET request
makeRequestWithAxios({
  url: 'https://jsonplaceholder.typicode.com/posts',
  method: 'get',
});

// Example for POST request
makeRequestWithAxios({
  url: 'https://jsonplaceholder.typicode.com/posts',
  method: 'post',
  data: {
    title: 'foo',
    body: 'bar',
    userId: 1,
  },
});

// 5. jQuery AJAX (Using jQuery library)
console.log('\nUsing jQuery AJAX:');
const makeRequestWithJQuery = async (url, method, data) => {
  try {
    const result = await $.ajax({
      url: url,
      method: method,
      data: data,
    });
    console.log('jQuery AJAX Response:', result);
  } catch (err) {
    console.error('Error:', err);
  }
};

// Example for GET request
makeRequestWithJQuery('https://jsonplaceholder.typicode.com/posts', 'GET');

// Example for POST request
makeRequestWithJQuery('https://jsonplaceholder.typicode.com/posts', 'POST', {
  title: 'foo',
  body: 'bar',
  userId: 1,
});






