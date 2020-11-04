const BASE_URL = 'http://localhost:4040';

function updateBook(update, bookId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      // Accept: 'application/json'
    },
    body: JSON.stringify(update),
  };
  return fetch(`${BASE_URL}/books/${bookId}`, options).then(response =>
    response.json(),
  );
}

updateBook(
  {
    author: 'Me 100500',
  },
  38,
).then(renderBook);

function renderBook(book) {
  console.log(book);
}
