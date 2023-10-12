import { getCategoryListArr } from './axios';

const categoriesList = document.querySelector(`.categories-list`);

console.log(categoriesList);

getCategoryListArr()
  .then(res => {
    const html = res
      .map(
        ({ list_name }) => `<li class="list-categories-item">${list_name}</li>`
      )
      .join(``);
    console.log(`html`, html);

    categoriesList.insertAdjacentHTML(`beforeend`, html);
    console.log(`getCategoryListArr`, res);
    const firstElementList = categoriesList.firstChild;
    const firstText = firstElementList.textContent;

    const upperCaseText = firstText.toUpperCase();

    firstElementList.textContent = upperCaseText;
  })
  .catch(rej => console.log(`rej`, rej));

categoriesList.addEventListener(`click`, categotySelect);

function categotySelect(evt) {}
