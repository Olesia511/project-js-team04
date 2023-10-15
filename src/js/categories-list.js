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

let curentCategory = null;

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
  if (evt.target === curentCategory) {
    return;
  } else if (evt.target === evt.currentTarget) {
    return;
  } else if (evt.target === categoriesList.firstChild) {
  }
  removeCurrent();
  const categoryName = evt.target.textContent;
  console.log(categoryName);
  bookRequest(categoryName);
  curentCategory = evt.target;
  curentCategory.classList.add(`active-list-item`);
}

function addCurrent() {
  curentCategory.classList.add(`active-list-item`);
}

function removeCurrent() {
  curentCategory.classList.remove(`active-list-item`);
}
