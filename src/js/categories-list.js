import { getCategoryListArr } from './axios-fetch';
import {
  getCategoryBook,
  getBooks,
  markUpByCategory,
  updateTitleLastWordColor,
  bookRequest,
} from './markup-by-category.js';
import { topBooksRequest } from './top-books';

const categoriesList = document.querySelector(`.categories-list`);
const byCategoryField = document.querySelector(`.container-books-by-category`);
const topBooksField = document.querySelector(`.top-books-box`);
let curentCategory = null;

topBooksRequest();

function hideTopBooksField() {
  topBooksField.style.display = 'none';
}
function showTopBooksField() {
  topBooksField.style.display = 'flex';
}
function hideCategoryField() {
  byCategoryField.style.display = 'none';
}
function showCategoryField() {
  byCategoryField.style.display = 'block';
}

// showTopBooksField();
// hideCategoryField();

getCategoryListArr()
  .then(res => {
    const html =
      `<li class="list-categories-item">All categories</li>` +
      res
        .map(
          ({ list_name }) =>
            `<li class="list-categories-item">${list_name}</li>`
        )
        .join(``);
    // console.log(`html`, html);

    categoriesList.insertAdjacentHTML(`beforeend`, html);
    // console.log(`getCategoryListArr`, res);
    const firstElementList = categoriesList.firstChild;

    curentCategory = firstElementList;
    // console.log(curentCategory);

    addCurrent();
  })
  .catch(rej => console.log(`rej`, rej));

categoriesList.addEventListener(`click`, categotySelect);

function categotySelect(evt) {
  if (evt.target.textContent === curentCategory) {
    return;
  } else if (evt.target === evt.currentTarget) {
    return;
  } else if (evt.target === categoriesList.firstChild) {
    if (document.querySelector(`.container-best-books`)) {
      removeCurrent();
      showTopBooksField();
      hideCategoryField();
    } else {
      removeCurrent();
      hideCategoryField();
      topBooksRequest();
      showTopBooksField();
    }
  } else {
    removeCurrent();
    hideTopBooksField();
    const categoryName = evt.target.textContent;
    console.log(categoryName);
    bookRequest(categoryName);
    showCategoryField();
  }
  curentCategory = evt.target;
  curentCategory.classList.add(`active-list-item`);
}

function addCurrent() {
  curentCategory.classList.add(`active-list-item`);
}

function removeCurrent() {
  curentCategory.classList.remove(`active-list-item`);
}
