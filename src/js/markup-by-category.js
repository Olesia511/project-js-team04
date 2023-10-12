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
    .map(({ book_image, title, author }) => {
      return `<li class="element-books-by-category"><img src="${book_image}" alt="${title} width="335px" height="485px"class="img-books-by-category" /><div class="title-container"><h3 class="name-books-by-category">${title}</h3><pclass="title-books-by-category">${author}</pclass=></div></li>`;
    })
    .join('');
  list.innerHTML = markup;
  return markup;
}
// markUpByCategory(books);
