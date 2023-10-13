import { getCategoryBook, getBooks } from './axios';

// -- const categoryBook буде = тій категорії яку вибере користувач
const categoryBook = 'Mass Market Monthly';

const categoryBookFetch = getCategoryBook(categoryBook);
console.log(`categoryBookFetch`, categoryBookFetch);

getBooks(categoryBookFetch)
  .then(res => {
    console.log(`Get book by category`, res);
    markUpByCategory(res);
  })
  .catch(rej => console.log(rej));

function markUpByCategory(array) {
  const list = document.querySelector('.list-books-by-category');
  const markup = array
    .map(({ book_image, title, author, _id }) => {
      return `<li data-book-id='${_id}' class="element-books-by-category js-target">
      <img src="${book_image}" alt="${title} width="335px" height="485px" class="img-books-by-category js-target" />
      <div class="title-container js-target">
      <h3 class="name-books-by-category js-target">${title}</h3>
      <p class="title-books-by-category js-target">${author}</p>
      </div>
      </li>`;
    })
    .join('');
  list.innerHTML = markup;
  return markup;
}
