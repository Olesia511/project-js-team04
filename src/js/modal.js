import { getBooksById } from './axios';

const modal = document.querySelector('.modal');
const modalOpen = document.querySelector('.modal-open');
const backdrop = document.querySelector('.js-backdrop');
const modalClose = document.querySelector('.close-btn-modal');
const marcupModal = document.querySelector('.marcup');

const containerFromMarcup = document.querySelector('.add-books-backend');

// -------  Modal -----////

modalOpen.addEventListener('click', onOpenModal);

backdrop.addEventListener('click', onBackdropClick);

modalClose.addEventListener('click', onCloseModal);

window.addEventListener('keydown', onEscKeyPress);

function onOpenModal() {
  //console.log(listAddBook);
  backdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', onEscKeyPress);
}

function onCloseModal() {
  backdrop.classList.add('is-hidden');
  window.removeEventListener('keydown', onEscKeyPress);
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

const listAddBook = document.querySelector('.container-books-by-category');

listAddBook.addEventListener('click', onClick);

function onClick(evt) {
  if (!evt.target.classList.contains('js-target')) {
    return;
  }
  const bookId =
    evt.target.dataset.bookId ?? evt.target.closest('li').dataset.bookId;
  console.log('Get BOOK ID ======', bookId);

  getBooksById(bookId)
    .then(data => console.log(bookId, data))
    .catch(rej => console.log(rej));
  onOpenModal();
}

// getBooksById(bookId)
// .then(res => {

//   let imgBook = res[0].book_image;
//   let nameBook = res[0].list_name;
//   let description = res[0].description;
//   let author = res[0].author

//   containerFromMarcup.innerHTML = marcup(imgBook, nameBook, description, author);

// //   refs.container.classList.remove("is-hidden");
// //    refs.loader.hidden = true;

// })
// .catch(err => {

//   console.log(err);
// })

//const bookId = '643282b1e8576658861,26a0dc';

// getBooksById(bookId)
//   .then(res => console.log(bookId, res))
//   .catch(rej => console.log(rej));

// getBooksById().then(res => {
// const creatMarcup = res.map(({ author, book_image, list_name, description }) => `<img src="${book_image}" alt="${list_name}" />
// <h2>${list_name}</h2>
// <h4>${author}</h4>
// <p>${description}</p>`).join('');
//   containerFromMarcup.insertAdjacentHTML('beforeend', creatMarcup);

// })
//   .catch(err => {

//     console.log(err);
//   });
// marcupModal.addEventListener('')

// function marcup(imgBook, nameBook, description, author) {

//   return  `
//   <img src="${imgBook}" alt="${list_name}" />
// // <h2>${nameBook}</h2>
// // <h4>${author}</h4>
// // <p>${description}</p>`;
// }

//------ Local Storage -----//

// const addLocalBtn = document.querySelector('.')
