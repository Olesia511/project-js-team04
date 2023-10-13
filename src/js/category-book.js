const listAddBook = document.querySelector('.container-books-by-category');

listAddBook.addEventListener('click', onClick);

function onClick(evt) {
  if (!evt.target.classList.contains('js-target')) {
    return;
  }
  const bookId =
    evt.target.dataset.bookId ?? evt.target.closest('li').dataset.bookId;
  console.log('Get BOOK ID ======', bookId);
}
