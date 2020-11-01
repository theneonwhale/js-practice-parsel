const API_KEY = '78a7a5d1d4074a089e9876225c6e9b0d';
const BASE_URL = 'https://newsapi.org/v2';

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    const options = {
      headers: {
        Authorization: API_KEY,
      },
    };

    const url = `${BASE_URL}/everything?q=${this.searchQuery}&pageSize=4&page=${this.page}`;

    return fetch(url, options)
      .then(response => response.json())
      .then(({ articles }) => {
        this.incrementPage();
        return articles;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
