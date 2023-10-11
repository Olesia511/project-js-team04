const perPage = 10;
const currentPage = 1;
const searchValue = 'cat';

const BASE_URL = 'https://books-backend.p.goit.global/';
// const AUTH_KEY = '39799120-0adfdb8bf4f296c3a7d41d46c';
const CATEGORY_LIST = 'books/category-list';
const TOP_BOOKS = 'books/top-books';
const CATEGORY = 'books/category';
// `${BASE_URL}${CATEGORY}?category=Young%20Adult%20Paperback%20Monthly`;
// const BOOKS_ID = `books/${id}`;
// function

// ==== Отримання списку категорій книг та додавання до localStorage

async function getCategoryListArr() {
  const resp = await axios.get(`${BASE_URL}${CATEGORY_LIST}`);

  const categoryList = await resp.data;
  localStorage.setItem('category-list', JSON.stringify(categoryList));
  return categoryList;
}

getCategoryListArr()
  .then(res => {
    console.log(`res`, res);
  })
  .catch(rej => console.log(`rej`, rej));

// ==== Отримання з localStorage однієї категорії книжок по кліку та запрос на бекенд по категорії

const categoryBook = 'Mass Market Monthly';

function getCategoryBookLocalStorage() {
  const savedCategoryList = localStorage.getItem('category-list');
  const parsedCategoryList = JSON.parse(savedCategoryList);
  const findCategory = parsedCategoryList
    .find(book => book['list_name'] === categoryBook)
    ['list_name'].split(' ')
    .join('%20');
  console.log(`findCategory`, findCategory);

  getBook(findCategory)
    .then(r => console.log(`find`, r))
    .catch(r => console.log(r));
  return findCategory;
}

getCategoryBookLocalStorage();

async function getBook(book) {
  const resp = await axios.get(`${BASE_URL}${CATEGORY}?category=${book}`);

  const categoryList = await resp;
  // localStorage.setItem('category-list', JSON.stringify(categoryList));
  return categoryList;
}

// ===
