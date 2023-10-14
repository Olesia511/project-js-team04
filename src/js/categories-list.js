import { getCategoryListArr } from './axios';

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
    console.log(`html`, html);

    categoriesList.insertAdjacentHTML(`beforeend`, html);
    console.log(`getCategoryListArr`, res);
    const firstElementList = categoriesList.firstChild;
    const firstText = firstElementList.textContent;
    // console.log('firstElementList', firstElementList.classList);
    curentCategory = firstElementList;
    console.log(curentCategory);

    addCurrent();
    // const upperCaseText = firstText.toUpperCase();

    // firstElementList.textContent = upperCaseText;
    // firstElementList.style.color = 'var(--violet-color)';
  })
  .catch(rej => console.log(`rej`, rej));

categoriesList.addEventListener(`click`, categotySelect);

function categotySelect(evt) {
  console.log(evt.currentTarget);
  if (evt.target === curentCategory) {
    return;
  } else if (evt.target === evt.currentTarget) {
    return;
  } else if (evt.target === categoriesList.firstChild) {
  }
  removeCurrent();

  curentCategory = evt.target;
  console.log(curentCategory);
  curentCategory.classList.add(`active-list-item`);
}

function addCurrent() {
  curentCategory.classList.add(`active-list-item`);
}

function removeCurrent() {
  curentCategory.classList.remove(`active-list-item`);
}
