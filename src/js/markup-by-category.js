import { getCategoryBook, getBooks } from './axios';

// -- const categoryBook буде = тій категорії яку вибере користувач // let categoryBook = "";
const categoryBook = 'Hardcover Fiction';
const title = document.querySelector('.title-category');
const categoryBookFetch = getCategoryBook(categoryBook);

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
      <img src="${book_image}" alt="${title}" class="img-books-by-category js-target" />
      <div class="title-container js-target">
      <h3 class="name-books-by-category js-target">${title}</h3>
      <p class="title-books-by-category js-target">${author}</p>
      </div>
      </li>`;
    })
    .join('');

  list.innerHTML = markup;
  title.textContent = categoryBook;

  updateTitleLastWordColor(title, categoryBook);

  // const element = document.querySelector('.name-books-by-category');
  // trimText(element);

  return markup;
}

function updateTitleLastWordColor(title, categoryBook) {
  const words = categoryBook.split(' ');
  // console.log('h2', words);
  const lastWord = words[words.length - 1];
  // console.log('lastWord', lastWord);
  let updatedTitle = '';

  words.forEach(word => {
    if (updatedTitle !== '') {
      updatedTitle += ' ';
    }

    if (word === lastWord) {
      updatedTitle += `<span class="title-category-part">${word}</span>`;
    } else {
      updatedTitle += word;
    }
  });

  title.innerHTML = updatedTitle;
}

// function textReduction(element) {
//   const text = element.textContent;
//   const words = text.split(' ');
//   let maxWords;

//   if (window.innerWidth < 768) {
//     maxWords = 4;
//   } else {
//     maxWords = 2;
//   }

//   if (words.length > maxWords) {
//     const reducedText = words.slice(0, maxWords).join(' ');
//     element.textContent = reducedText + '...';
//   }
// }

// function trimText(element) {
//   const windowWidth = window.innerWidth;

//   let maxCharacters;
//   if (windowWidth >= 768) {
//     maxCharacters = 11;
//   } else {
//     maxCharacters = 22;
//   }

//   const text = element.textContent;
//   if (text.length > maxCharacters) {
//     element.textContent = text.slice(0, maxCharacters) + '...';
//   }
// }
// const element = document.querySelector('.name-books-by-category');
// trimText(element);

export {
  getCategoryBook,
  getBooks,
  markUpByCategory,
  updateTitleLastWordColor,
};
