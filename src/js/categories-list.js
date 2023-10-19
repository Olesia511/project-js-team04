import { getCategoryListArr } from './axios-fetch';
import {
  // getCategoryBook,
  // getBooks,
  // markUpByCategory,
  // updateTitleLastWordColor,
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
let liFromList;
let wholeList;

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

    categoriesList.insertAdjacentHTML(`beforeend`, html);

    const firstElementList = categoriesList.firstChild;

    curentCategory = firstElementList;

    addCurrent();

    liFromList = document.querySelectorAll(`.list-categories-item`);

    wholeList = [...liFromList];
  })
  .catch(rej => console.log(`rej`, rej))
  .finally(() => {});

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
      topContainer.addEventListener('click', reMarkup);
    } else {
      removeCurrent();
      hideCategoryField();
      topBooksRequest();
      showTopBooksField();
      topContainer.addEventListener('click', reMarkup);
    }
  } else {
    removeCurrent();
    hideTopBooksField();
    const categoryName = evt.target.textContent;
    // console.log(categoryName);
    bookRequest(categoryName);
    showCategoryField();
    topContainer.removeEventListener('click', reMarkup);
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

function setFirstTheme() {
  wholeList.map(item => item.classList.remove('dark'));
}
function secFirstTheme() {
  wholeList.map(item => item.classList.add('dark'));
}

const topContainer = document.querySelector(`.container-best-books`);

topContainer.addEventListener('click', reMarkup);

function reMarkup(evt) {
  if (!evt.target.classList.contains(`see-more-btn`)) {
    return;
  }
  const data = evt.target.dataset.category;
  // console.log(typeof data);

  removeCurrent();
  hideTopBooksField();
  bookRequest(data);
  showCategoryField();
  curentCategory = wholeList.find(
    ({ textContent }) => textContent === `${data}`
  );
  addCurrent();
  topContainer.removeEventListener('click', reMarkup);
}
