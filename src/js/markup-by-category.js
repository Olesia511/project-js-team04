import { getCategoryBook, getBooks } from './axios-fetch';

// -- const categoryBook буде = тій категорії яку вибере користувач // let categoryBook = "";
const categoryBook = 'Hardcover Fiction';
// const categoryBook = 'Mass Market Monthly';
const title = document.querySelector('.title-category');
// const categoryBookFetch = getCategoryBook(categoryBook);

function bookRequest(categoryBookFetch) {
  getBooks(categoryBookFetch)
    .then(res => {
      console.log(`Get book by category`, res);
      markUpByCategory(res);
    })
    .catch(rej => console.log(rej));
}

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

  const titleElements = document.querySelectorAll('.name-books-by-category');
  titleElements.forEach(titleElement => {
    trimText(titleElement);
  });

  trimTitleText();

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

function trimText() {
  const windowWidth = window.innerWidth;
  let maxCharacters;

  if (windowWidth >= 768) {
    maxCharacters = 19;
  } else {
    maxCharacters = 31;
  }

  const titleElements = document.querySelectorAll('.name-books-by-category');

  titleElements.forEach(titleElement => {
    let text = titleElement.textContent;
    if (text.length > maxCharacters) {
      const words = text.split(' ');
      let resultText = '';

      for (const word of words) {
        if (resultText.length + word.length <= maxCharacters) {
          resultText += (resultText === '' ? '' : ' ') + word;
        } else {
          break;
        }
      }

      titleElement.textContent =
        resultText + (resultText.length < text.length ? '...' : '');
    }
  });
}

function trimTitleText() {
  const windowWidth = window.innerWidth;
  let maxCharacters;
  let maxWords;

  if (windowWidth >= 768) {
    maxCharacters = 32;
    maxWords = 5;
  } else {
    maxCharacters = 45;
    maxWords = 8;
  }

  const titleElements = document.querySelectorAll('.title-books-by-category');

  titleElements.forEach(titleElement => {
    const text = titleElement.textContent;
    const words = text.split(' ');

    if (words.length > maxWords || text.length > maxCharacters) {
      const trimmedWords = words.slice(0, maxWords).join(' ');
      titleElement.textContent = `${trimmedWords}${
        words.length > maxWords ? '...' : ''
      }`;
    }
  });
}

export {
  getCategoryBook,
  getBooks,
  markUpByCategory,
  updateTitleLastWordColor,
  bookRequest,
  trimText,
};
