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
              ({ _id, author, book_image, title }) => ` 
  <li data-book-id="${_id}" class="book-item js-target">
              <div class="cover-wrap">
                <img class="book-img js-target" src="${book_image}" alt="${title}" />
                <p class="cover-text">quick view</p>
              </div>
              <div class="title-author-container">
                <h2 class="book-title js-target">${title}</h2>
                <h3 class="author js-target">${author}</h3>
              </div>
  </li>`
            )
            .join('');
          // console.log(mappedBooks);
          const categoryList = `<div class="category-container"><h2 class="category-title">${list_name}</h2>
          <ul class="book-list">${mappedBooks}</ul>
          <button data-category="${list_name}" class="see-more-btn">
            SEE MORE
          </button>
          </div>`;

          // const mappedBooksList = `<ul class="book-list">${mappedBooks}</ul>`;
          // const categoryBtn = `<button data-category="${list_name}" class="see-more-btn">
          //   SEE MORE
          // </button>`;
          // const categorySum = title + mappedBooksList + categoryBtn;
          // console.log(categorySum);
          return categoryList;
        })
        .join('');
      container.innerHTML = nameCategory;
    })
    .catch(rej => console.log(`rej`, rej));
}
topBooksRequest();

export { topBooksRequest };
