const savedBooksList = document.querySelector('.shop-list-list');
const placeholder = document.querySelector('.shop-list-placeholder');

const DATA_KEY = 'user-books';

// ----------- Make Description shorter for mob and tabl -----------

function handleResize() {
  const description = document.querySelector('.js-description');
  const descriptionLarge = description.textContent;

  const title = document.querySelector('.js-name');
  const titleLarge = title.textContent;

  const category = document.querySelector('.js-category');
  const categoryLarge = category.textContent;

  if (window.innerWidth < 768) {
    const descriptionShirt = descriptionLarge.slice(0, 86) + '…';
    description.textContent = descriptionShirt;

    const titleShirt = titleLarge.slice(0, 22) + '…';
    description.textContent = descriptionShirt;

    const categoryShirt = categoryLarge.slice(0, 34) + '…';
    category.textContent = categoryShirt;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
    const descriptionShirt = descriptionLarge.slice(0, 253) + '…';
    description.textContent = descriptionShirt;
    description.textContent = descriptionLarge;
    category.textContent = categoryLarge;
  } else {
    description.textContent = descriptionLarge;
    description.textContent = descriptionLarge;
    category.textContent = categoryLarge;
  }
}

// ----------- Get data from LS and make markup -----------

let parsedLocalData;
if (localStorage.getItem(DATA_KEY)) {
  parsedLocalData = JSON.parse(localStorage.getItem(DATA_KEY));
} else {
  parsedLocalData = [];
}

function shopListMarkup(arr) {
  const markup = arr
    .map(
      ({
        buy_links = 'null',
        amazon_product_url = 'null',
        book_image = 'null',
        title = 'null',
        list_name = 'null',
        description = 'null',
        author,
        _id = 'null',
      }) => {
        return `<li class="shop-list-item" data-id="${_id}">
              <button type="button" class="delete-btn">
              <div class="delete-btn-icon">
              </div>
              </button>
              <div class="book-cover"><img class="book-cover-img" src="${book_image}" alt="${title}" /></div>
              <div class="book-info">
                <h2 class="book-name js-name">${title}</h2>
                <p class="book-category js-category">${list_name}</p>
                <p class="book-description js-description">${description}</p>
                <p class="book-author">${author}</p>

                <div class="link-container">
                  <a class="amazon-icon hover-items-amaz-books" href="${amazon_product_url}" target="_blank" rel="noopener noreferrer nofollow">
                  <div class="amazon-logo">
                  </div>
                  </a>
                  <a class="apple-icon hover-items-amaz-books" href="${buy_links[1].url}" target="_blank" rel="noopener noreferrer nofollow">
                  <div class="apple-books-logo">
                  </div>
                  </a>
                </div>
              </div>
        </li>`;
      }
    )
    .join('');

  if (parsedLocalData.length !== 0) {
    placeholder.hidden = true;
    savedBooksList.innerHTML = markup;
    handleResize();
    const deleteBtns = document.querySelectorAll('.delete-btn');
    deleteBtns.forEach(btn => {
      btn.addEventListener('click', onDelete);
    });
  } else {
    placeholder.hidden = false;
    savedBooksList.innerHTML = '';
  }
}

shopListMarkup(parsedLocalData);

// ----------- Delete book from LS (Button) -----------

function onDelete(evt) {
  const bookId = evt.target.closest('.shop-list-item').dataset.id;

  const bookToRemoveId = parsedLocalData.findIndex(book => book._id === bookId);
  if (bookToRemoveId !== -1) {
    parsedLocalData.splice(bookToRemoveId, 1);
    localStorage.setItem(DATA_KEY, JSON.stringify(parsedLocalData));
    shopListMarkup(parsedLocalData);
  }
}
