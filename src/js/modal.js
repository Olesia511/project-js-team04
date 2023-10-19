import { getBooksById } from './axios-fetch';

const body = document.body;
const backdrop = document.querySelector('.js-backdrop');
const modalClose = document.querySelector('.close-btn-modal');
const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.btn-add-local');
const addLocal = document.querySelector('.add-local');
const removeLocal = document.querySelector('.remove-local');
const p = document.querySelector('.text-box');

const DATA_KEY = 'user-books'; // localStorage

let bookList;
if (localStorage.getItem(DATA_KEY)) {
  bookList = JSON.parse(localStorage.getItem(DATA_KEY));
} else {
  bookList = [];
}

const containerFromMarcup = document.querySelector('.add-books-backend');

// -------  Modal -----////

backdrop.addEventListener('click', onBackdropClick);
modalClose.addEventListener('click', onCloseModal);
window.addEventListener('keydown', onEscKeyPress);

function onCloseModal() {
  backdrop.classList.add('is-hidden');
  modal.classList.add('is-hidden');
  window.removeEventListener('keydown', onEscKeyPress);
  body.classList.remove('disasble-scroll');
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}

// ------- add Id Books ---- //

const listAddBook = document.querySelector('.list-books-by-category');
const listTopBook = document.querySelector('.container-best-books');

listAddBook.addEventListener('click', onClick);
listTopBook.addEventListener('click', onClick);

modalBtn.addEventListener('click', onAddLocal);

async function onClick(evt) {
  if (!evt.target.classList.contains('js-target')) {
    return;
  } else {
    backdrop.classList.remove('is-hidden');
    modal.classList.remove('is-hidden');
    window.addEventListener('keydown', onEscKeyPress);
    body.classList.add('disasble-scroll');
  }
  const bookId =
    evt.target.dataset.bookId ?? evt.target.closest('li').dataset.bookId;
  const findIndexBookLocalStorage = bookList.findIndex(
    book => book._id === `${bookId}`
  );

  if (findIndexBookLocalStorage !== -1) {
    addLocal.hidden = true;
    removeLocal.hidden = false;

    p.classList.remove('text-off');
  } else {
    addLocal.hidden = false;
    removeLocal.hidden = true;
    p.classList.add('text-off');
  }

  await getBooksById(bookId)
    .then(data => {
      let imgBook = data.book_image;
      let nameBook = data.title;
      let description = data.description;
      let author = data.author;
      let id = data._id;
      let urlAmazon = data.buy_links[0].url;
      let urlShop = data.buy_links[1].url;

      containerFromMarcup.innerHTML = marcup(
        imgBook,
        nameBook,
        description,
        author,
        id,
        urlAmazon,
        urlShop
      );
    })
    .catch(rej => console.log(rej));
}

function marcup(
  imgBook,
  nameBook,
  description,
  author,
  id,
  urlAmazon,
  urlShop
) {
  return `
  <div class="backend-box" data-book="${id}">
  <div class="cover-modal">

  <img class="img-book" src="${imgBook}" loading="lazy" alt="${nameBook}" />

  </div>
  <div>
 <h2 class="title-book">${nameBook}</h2>
 <h4 class="author-book">${author}</h4>
 <p class="descr-book">${description}</p>
 <ul class="modal-img-list">
        <li>
          <a class="hover-img" href="${urlAmazon}" target="_blank" rel="noopener noreferrer nofollow">
          <div class="img-modal-amazon">
          </div>
          </a>
        </li>
        <li>
          <a class="hover-img" href="${urlShop}" target="_blank" rel="noopener noreferrer nofollow">
          <div class="img-modal-bookshop">
          </div>
          </a>
        </li>
      </ul>
 </div>
 </div>
  `;
}

//------ Local Storage -----//

async function onAddLocal(evt) {
  const text = evt.target.textContent;
  const add = 'add to shopping list';

  const bookId = containerFromMarcup.childNodes[1].dataset.book;

  if (text === add) {
    addLocal.hidden = false;
    removeLocal.hidden = true;
    p.classList.add('text-off');
    modalBtn.blur();

    await getBooksById(bookId)
      .then(data => bookList.push({ ...data }))
      .catch(rej => console.log(rej));
    console.log(bookList);

    await localStorage.setItem(DATA_KEY, JSON.stringify(bookList));

    addLocal.hidden = true;
    removeLocal.hidden = false;
    p.classList.remove('text-off');
    modalBtn.blur();
  } else {
    const bookToRemoveId = bookList.findIndex(book => book._id === bookId);
    if (bookToRemoveId !== -1) {
      bookList.splice(bookToRemoveId, 1);
      await localStorage.setItem(DATA_KEY, JSON.stringify(bookList));

      addLocal.hidden = false;
      removeLocal.hidden = true;

      p.classList.add('text-off');
      modalBtn.blur();
    }
  }
}
