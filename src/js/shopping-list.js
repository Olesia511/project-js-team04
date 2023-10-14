const savedBooksList = document.querySelector('.shop-list-list');
const placeholder = document.querySelector('.shop-list-placeholder');

const DATA_KEY = 'user-books';

// ----------- Make Description shorter for mob and tabl -----------

// function handleResize() {
//   const description = document.querySelector('.js-description');
//   const descriptionLarge = description.textContent;

//   if (window.innerWidth < 768) {
//     const descriptionShirt = descriptionLarge.slice(0, 86) + '…';
//     description.textContent = descriptionShirt;
//   } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
//     const descriptionShirt = descriptionLarge.slice(0, 253) + '…';
//     description.textContent = descriptionShirt;
//   } else {
//     description.textContent = descriptionLarge;
//   }
// }

//! ----------- Make fake Data to LS -----------
// const books = [{"_id": "642fd89ac8cf5ee957f12360"},
//   {
//   "_id": "642fd89ac8cf5ee957f12361",
//   "list_name": "Middle Grade Paperback Monthly",
//   "date": "2023-04-07T08:46:57.000Z",
//   "age_group": "",
//   "amazon_product_url": "https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20",
//   "article_chapter_link": "",
//   "author": "Barbara O'Connor",
//   "book_image": "https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg",
//   "book_image_width": 330,
//   "book_image_height": 485,
//   "book_review_link": "",
//   "book_uri": "nyt://book/46604242-8624-57d1-bdd4-424c21cde273",
//   "contributor": "by Barbara O'Connor",
//   "contributor_note": "",
//   "created_date": "2023-04-05 23:10:17",
//   "description": "David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murderedwhile David was asleep just down the hall.",
//   "first_chapter_link": "",
//   "price": "0.00",
//   "primary_isbn10": "1250144051",
//   "primary_isbn13": "9781250144058",
//   "publisher": "Square Fish",
//   "rank": 1,
//   "rank_last_week": 0,
//   "sunday_review_link": "",
//   "title": "WISH",
//   "updated_date": "2023-04-05 23:10:17",
//   "weeks_on_list": 0,
//   "buy_links": [
//     {
//       "name": "Amazon",
//       "url": "https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20"
//     },
//     {
//       "name": "Apple Books",
//       "url": "https://goto.applebooks.apple/9781250144058?at=10lIEQ"
//     },
//     {
//       "name": "Barnes and Noble",
//       "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058"
//     },
//     {
//       "name": "Books-A-Million",
//       "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor"
//     },
//     {
//       "name": "Bookshop",
//       "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH"
//     },
//     {
//       "name": "IndieBound",
//       "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT"
//     }
//   ],
//   "__v": 0
// }]

// localStorage.setItem(DATA_KEY, JSON.stringify(books));

// ----------- Get data from LS and make markup -----------

// const parsedLocalData = JSON.parse(localStorage.getItem(DATA_KEY));

// function shopListMarkup(arr) {
//   const markup = arr.map(({ buy_links="null", amazon_product_url="null", book_image="null", title="null", list_name="null", description="null", author, _id="null" }) => {
//         return `<li class="shop-list-item" data-id="${_id}">
//               <button type="button" class="delete-btn">
//                 <svg class="delete-btn-icon" width="16" height="16">
//                   <use href="./img/icon.svg#icon-shop-list-delete"></use>
//                 </svg>
//               </button>
//               <div class="book-cover">${book_image}</div>
//               <div class="book-info">
//                 <h2 class="book-name">${title}</h2>
//                 <p class="book-category">${list_name}</p>
//                 <p class="book-description js-description">${description}</p>
//                 <p class="book-author">${author}</p>

//                 <div class="link-container">
//                   <a class="amazon-icon" href="${amazon_product_url}" target="_blank" rel="noopener noreferrer nofollow">
//                     <picture>
//                       <source
//                         srcset="
//                           ./img/shop-logo-amazon.png    1x,
//                           ./img/shop-logo-amazon-2x.png 2x
//                         "
//                       />
//                       <img
//                         class="amazon-logo"
//                         src="./img/shop-logo-amazon.png"
//                         alt="Amazon"
//                         width="32"
//                         height="11"
//                       />
//                     </picture>
//                   </a>
//                   <a class="apple-icon" href="${buy_links[1].url}" target="_blank" rel="noopener noreferrer nofollow">
//                     <picture>
//                       <source
//                         srcset="
//                           ./img/shop-logo.png    1x,
//                           ./img/shop-logo-2x.png 2x
//                         "
//                       />
//                       <img
//                         class="apple-books-logo"
//                         src="./img/shop-logo.png"
//                         alt="Apple Books"
//                         width="16"
//                         height="16"
//                       />
//                     </picture>
//                   </a>
//                 </div>
//               </div>
//         </li>`
//     }).join("");

//     if (parsedLocalData.length !== 0) {
//         placeholder.hidden = true;
//         savedBooksList.innerHTML = markup;
//         handleResize();
//       // window.addEventListener('resize', handleResize);
//     const deleteBtns = document.querySelectorAll(".delete-btn");
//     deleteBtns.forEach((btn) => {
//       btn.addEventListener("click", onDelete);
//     });
//     }

//     };

// shopListMarkup(parsedLocalData);

// ----------- Delete book from LS (Button) -----------

// function onDelete(evt) {
//   const bookId = evt.target.closest('.shop-list-item').dataset.id;

//   const bookToRemoveId = parsedLocalData.findIndex(book => book._id === bookId);

//   if (bookToRemoveId !== -1) {
//     parsedLocalData.splice(bookToRemoveId, 1);
//     localStorage.setItem(DATA_KEY, JSON.stringify(parsedLocalData));
//   }
// }
