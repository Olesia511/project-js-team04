import { getTopBooksArr } from './axios-fetch';

const container = document.querySelector('.container-best-books');

function topBooksRequest() {
  getTopBooksArr()
    .then(res => {
      // console.log(`getTopBooksArr`, res);
      const nameCategory = res
        .map(category => {
          const { list_name, books } = category;
          const mappedBooks = books
            .map(
              ({ _id, author, book_image, title }) => `<ul class="book-list">
  <li data-book-id="${_id}" class="book-item js-target">
    <img class="book-img js-target" src="${book_image}" alt="${title}" />
    <h2 class="book-title js-target">${title}</h2>
    <h3 class="author js-target">${author}</h3>
  </li>
</ul>`
            )
            .join('');
          // console.log(mappedBooks);
          const title = `<h2 class="category-title">${list_name}</h2>`;
          const categoryBtn = `<button data-category="${list_name}" class="see-more-btn">
            SEE MORE
          </button>`;
          const categorySum = title + mappedBooks + categoryBtn;
          // console.log(categorySum);
          return categorySum;
        })
        .join('');
      container.innerHTML = nameCategory;
    })
    .catch(rej => console.log(`rej`, rej));
}
topBooksRequest();

export { topBooksRequest };
