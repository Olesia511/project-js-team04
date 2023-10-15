import { getTopBooksArr } from './axios-fetch';

const container = document.querySelector('.container-best-books');

getTopBooksArr()
  .then(res => {
    console.log(`getTopBooksArr`, res);
    const nameCategory = res.map(category => {
      const { list_name, books } = category;
      const title = `<h2 class="category-title">${list_name}</h2>`;
      const bookInfo = books.map(book => {
        return createMarkupBestBooks(book);
      });
      container.insertAdjacentHTML('beforeend', title + bookInfo);
    });
    return nameCategory;
  })
  .catch(rej => console.log(`rej`, rej));

function createMarkupBestBooks(book) {
  const { _id, author, book_image, title } = book;
  const booksMarkup = `<ul class="book-list">
  <li data-book-id="${_id}"  class="book-item js-target">
    <img class="book-img js-target" src="${book_image}" alt="${title}" />
    <h2 class="book-title js-target">${title}</h2>
    <h3 class="author js-target">${author}</h3>
  </li>
  <button class="see-more-btn">SEE MORE</button>
</ul>`;
  return booksMarkup;
}
export { createMarkupBestBooks, getTopBooksArr };
