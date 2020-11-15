import InfiniteScroll from 'infinite-scroll';

// console.log(InfiniteScroll);

// var unsplashID =
//   '9ad80b14098bcead9c7de952435e937cc3723ae61084ba8e729adb642daf0251';
// const API_KEY = '78a7a5d1d4074a089e9876225c6e9b0d';
// const BASE_URL = 'https://newsapi.org/v2';

const infScroll = new InfiniteScroll('.container', {
  responseType: 'text',
  history: false,
  path() {
    // const url = `https://api.unsplash.com/photos?client_id=${unsplashID}&page=${this.pageIndex}`;
    // return url;
    return `https://newsapi.org/v2/everything?q=bitcoin&apiKey=78a7a5d1d4074a089e9876225c6e9b0d`;
  },
});

fetch(
  `https://newsapi.org/v2/everything?q=bitcoin&apiKey=78a7a5d1d4074a089e9876225c6e9b0d`,
);

// console.log(infScroll);

// infScroll.loadNextPage();

// setTimeout(() => {
//   infScroll.loadNextPage();
// }, 2000);

// infScroll.on('load', (response, path) => {
// console.log(JSON.parse(response));
//   console.log(path);
// });

// const markup = '<p>qweqweqwe</p>';
// const fragment = new DocumentFragment();
// const d = document.createElement('div');
// d.innerHTML = markup;
// fragment.innerHTML = markup;
// console.log(fragment);
