const BASE_URL = 'http://localhost:4040';

const newBook = {
  title: 'Test book 2',
  author: 'Me 2',
  genres: ['HTML', 'JS'],
  rating: 9.99,
};

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Accept: 'application/json'
    },
    body: JSON.stringify(book),
  };
  return fetch(`${BASE_URL}/books`, options).then(response => response.json());
}

addBook({
  title: 'Test book 3',
  author: 'Me 2',
  genres: ['HTML', 'JS'],
  rating: 9.99,
}).then(renderBook);

function renderBook(book) {
  console.log(book);
}
