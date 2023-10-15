const savedBooksList = document.querySelector('.shop-list-list');
const placeholder = document.querySelector('.shop-list-placeholder');

const DATA_KEY = 'user-books';

// ----------- Make Description shorter for mob and tabl -----------

function handleResize() {
  const description = document.querySelector('.js-description');
  const descriptionLarge = description.textContent;

  if (window.innerWidth < 768) {
    const descriptionShirt = descriptionLarge.slice(0, 86) + '…';
    description.textContent = descriptionShirt;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
    const descriptionShirt = descriptionLarge.slice(0, 253) + '…';
    description.textContent = descriptionShirt;
  } else {
    description.textContent = descriptionLarge;
  }
}


// ----------- Get data from LS and make markup -----------

let parsedLocalData = JSON.parse(localStorage.getItem(DATA_KEY)) || [];

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
                <svg class="delete-btn-icon" width="16" height="16">
                  <use href="./img/icon.svg#icon-shop-list-delete"></use>
                </svg>
              </button>
              <div class="book-cover"><img class="book-cover-img" src="${book_image}" alt="${title}" /></div>
              <div class="book-info">
                <h2 class="book-name">${title}</h2>
                <p class="book-category">${list_name}</p>
                <p class="book-description js-description">${description}</p>
                <p class="book-author">${author}</p>

                <div class="link-container">
                  <a class="amazon-icon" href="${amazon_product_url}" target="_blank" rel="noopener noreferrer nofollow">
                    <picture>
                      <source
                        srcset="
                          ./img/shop-logo-amazon.png    1x,
                          ./img/shop-logo-amazon-2x.png 2x
                        "
                      />
                      <img
                        class="amazon-logo"
                        src="./img/shop-logo-amazon.png"
                        alt="Amazon"
                        width="32"
                        height="11"
                      />
                    </picture>
                  </a>
                  <a class="apple-icon" href="${buy_links[1].url}" target="_blank" rel="noopener noreferrer nofollow">
                    <picture>
                      <source
                        srcset="
                          ./img/shop-logo.png    1x,
                          ./img/shop-logo-2x.png 2x
                        "
                      />
                      <img
                        class="apple-books-logo"
                        src="./img/shop-logo.png"
                        alt="Apple Books"
                        width="16"
                        height="16"
                      />
                    </picture>
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
    // window.addEventListener('resize', handleResize);
    const deleteBtns = document.querySelectorAll('.delete-btn');
    deleteBtns.forEach(btn => {
      btn.addEventListener('click', onDelete);
    });
  }
  else {
      placeholder.hidden = false;
      savedBooksList.innerHTML = "";
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