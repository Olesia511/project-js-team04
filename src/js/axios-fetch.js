const BASE_URL = 'https://books-backend.p.goit.global/';
const CATEGORY_LIST = 'books/category-list';
const TOP_BOOKS = 'books/top-books';
const CATEGORY = 'books/category';
const BOOKS_ID = `books/`;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ==== Отримання списку категорій книг та додавання до localStorage

async function getCategoryListArr() {
  const respList = await axios.get(`${BASE_URL}${CATEGORY_LIST}`);

  const categoryList = await respList.data;
  return categoryList;
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ==== Отримання списку ТОП книг по категоріям

async function getTopBooksArr() {
  const respTopBooks = await axios.get(`${BASE_URL}${TOP_BOOKS}`);

  const topBooks = await respTopBooks.data;
  return topBooks;
}

function hideLoader() {
  elements.loader.style.display = `none`;
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ==== Отримання списку книжок за категорією

function getCategoryBook(text) {
  const categoryText = text.split(' ').join('%20');
  return categoryText;
}

async function getBooks(category) {
  const respCategory = await axios.get(
    `${BASE_URL}${CATEGORY}?category=${category}`
  );
  const categoryBook = await respCategory.data;
  return categoryBook;
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ==== Отримання книжки за ID

async function getBooksById(id) {
  const respBooksId = await axios.get(`${BASE_URL}${BOOKS_ID}${id}`);
  const bookById = await respBooksId.data;
  return bookById;
}

export {
  getCategoryListArr,
  getTopBooksArr,
  getCategoryBook,
  getBooksById,
  getBooks,
};
