import { getBooksById } from './axios-fetch';


const body = document.body;
const backdrop = document.querySelector('.js-backdrop');
const modalClose = document.querySelector('.close-btn-modal');
const modalBtn = document.querySelector('.btn-add-local');
const addLocal = document.querySelector('.add-local');
const removeLocal = document.querySelector('.remove-local');
const p = document.querySelector('.text-modal');

const DATA_KEY = 'user-books'; // localStorage
localStorage.setItem('user-books', '');

let bookList;
if (localStorage.getItem(DATA_KEY)) {
  bookList = JSON.parse(localStorage.getItem(DATA_KEY));
} else {
  bookList = [];
}
// const bookList = JSON.parse(localStorage.getItem(DATA_KEY));

const containerFromMarcup = document.querySelector('.add-books-backend');

// -------  Modal -----////

backdrop.addEventListener('click', onBackdropClick);
modalClose.addEventListener('click', onCloseModal);
window.addEventListener('keydown', onEscKeyPress);

function onCloseModal() {
  backdrop.classList.add('is-hidden');
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
modalBtn.addEventListener('click', onRemoveLocal)

async function onClick(evt) {
  backdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', onEscKeyPress);
  body.classList.add('disasble-scroll');

  if (!evt.target.classList.contains('js-target')) {
    return;
  }
  const bookId =
    evt.target.dataset.bookId ?? evt.target.closest('li').dataset.bookId;
  const findIndexBookLocalStorage = bookList.findIndex(
    book => book._id === `${bookId}`
  );

  if (findIndexBookLocalStorage !== -1) {
    addLocal.hidden = true;
    removeLocal.hidden = false;
    p.hidden = false;
    p.hidden = false;
    
  } else {
    addLocal.hidden = false;
    removeLocal.hidden = true;
    p.hidden = true;
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
  <img class="img-book" src="${imgBook}" alt="${nameBook}" />
  
  </div>
  <div>
 <h2 class="title-book">${nameBook}</h2>
 <h4 class="author-book">${author}</h4>
 <p class="descr-book">${description}</p>
 <ul class="modal-img-list">
        <li>
          <a href="${urlAmazon}" target="_blank" rel="noopener noreferrer nofollow">
            <picture>
              <source
                srcset="
                  ./img/shop-logo-amazon.png 1x,
                  ./img/shop-logo-amazon.png 2x
                "
              />
              
              <img
                class="img-modal-amazon hover-img"
                src="./img/shop-logo-amazon.png"
                alt="link-amazon"
              />
            </picture>
          </a>
        </li>
        <li>
          <a href="${urlShop}" target="_blank" rel="noopener noreferrer nofollow">
            <picture>
              
              <source
                srcset="./img/shop-logo.png 1x, ./img/shop-logo.png 2x"
              />
              <img
                class="img-modal-bookshop hover-img"
                src="./img/shop-logo.png"
                alt="link-amazon"
              />
            </picture>
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
    p.hidden = true;
    modalBtn.blur();
    

    await getBooksById(bookId)
      .then(data => bookList.push({ ...data }))
      .catch(rej => console.log(rej));
    console.log(bookList);

    await localStorage.setItem(DATA_KEY, JSON.stringify(bookList));

    addLocal.hidden = true;
    removeLocal.hidden = false;
    p.hidden = false;
  } else {
    const bookToRemoveId = bookList.findIndex(book => book._id === bookId);
    if (bookToRemoveId !== -1) {
      bookList.splice(bookToRemoveId, 1);
      await localStorage.setItem(DATA_KEY, JSON.stringify(bookList));

      addLocal.hidden = false;
      removeLocal.hidden = true;
      p.hidden = true;
      modalBtn.blur();
    }
  }
}
