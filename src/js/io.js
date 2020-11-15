const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

let observer = new IntersectionObserver(function (entries) {
  // entries: Array of observed elements

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry);
    }
  });
}, options);

// Now we should tell our Observer what to observe
observer.observe(document.querySelector('#sentinel'));
