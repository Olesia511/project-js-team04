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

async function getResponseArr() {
  const resp = await axios.get(`${BASE_URL}${CATEGORY_LIST}`);

  const arr = await resp.data;
  return arr;
}

getResponseArr()
  .then(res => {
    console.log(res);
    const categoryType = res.map(el => el['list_name'].split(' ').join('%20'));
    console.log(categoryType);
  })
  .catch(rej => console.log(rej));
