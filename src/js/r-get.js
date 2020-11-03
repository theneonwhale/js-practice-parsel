const BASE_URL = 'http://localhost:4040';

function fetchBook() {
  return fetch(`${BASE_URL}/books`)
    .then(response => response.json())
    .then(console.log);
}

function fetchBookById(bookId) {
  return fetch(`${BASE_URL}/books/${bookId}`)
    .then(response => response.json())
    .then(console.log);
}

fetchBook();
fetchBookById(4);
