const BASE_URL = 'http://localhost:4040';

function removeBook(bookId) {
  const url = `${BASE_URL}/books/${bookId}`;
  const options = {
    method: 'DELETE',
  };
  return fetch(url, options).then(response => response.json());
}

removeBook(29).then(renderBook);
removeBook(30).then(renderBook);

function renderBook(book) {
  console.log(book);
}
