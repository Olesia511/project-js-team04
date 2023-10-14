import { getBooksById } from './axios';

//const modal = document.querySelector('.modal');
//const modalOpen = document.querySelector('.modal-open');
const backdrop = document.querySelector('.js-backdrop');
const modalClose = document.querySelector('.close-btn-modal');
//const marcupModal = document.querySelector('.marcup');
const modalBtn = document.querySelector('.btn-add-local');
const addLocal = document.querySelector('.add-local');
const removeLocal = document.querySelector('.remove-local');
const p = document.querySelector('.text-modal');

const DATA_KEY = 'user-books'; // localStorage
const bookList = [
    {
    "_id": "643282b1e85766588626a089",
    "list_name": "Mass Market Monthly",
    "date": "2023-04-09T09:28:38.379Z",
    "age_group": "",
    "amazon_product_url": "https://www.amazon.com/dp/153875309X?tag=NYTBSREV-20",
    "article_chapter_link": "",
    "author": "James Patterson and J.D. Barker",
    "book_image": "https://storage.googleapis.com/du-prd/books/images/9781538753095.jpg",
    "book_image_width": 334,
    "book_image_height": 500,
    "book_review_link": "",
    "book_uri": "nyt://book/a1dd2b46-cced-51b1-95d3-db0410a0efb8",
    "contributor": "by James Patterson and J.D. Barker",
    "contributor_note": "",
    "created_date": "2023-04-05 23:10:15",
    "description": "Detective Walter O'Brien is obsessed with an escape artist who bludgeoned her kidnapper and avoided police custody.",
    "first_chapter_link": "",
    "price": "0.00",
    "primary_isbn10": "1538753081",
    "primary_isbn13": "9781538753088",
    "publisher": "Grand Central",
    "rank": 1,
    "rank_last_week": 0,
    "sunday_review_link": "",
    "title": "DEATH OF THE BLACK WIDOW",
    "updated_date": "2023-04-05 23:10:15",
    "weeks_on_list": 0,
    "buy_links": [
        {
            "name": "Amazon",
            "url": "https://www.amazon.com/dp/153875309X?tag=NYTBSREV-20"
        },
        {
            "name": "Apple Books",
            "url": "https://goto.applebooks.apple/9781538753088?at=10lIEQ"
        },
        {
            "name": "Barnes and Noble",
            "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781538753088"
        },
        {
            "name": "Books-A-Million",
            "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FDEATH%252BOF%252BTHE%252BBLACK%252BWIDOW%252FJames%252BPatterson%252Band%252BJ.D.%252BBarker%252F9781538753088&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DDEATH%252BOF%252BTHE%252BBLACK%252BWIDOW%252BJames%252BPatterson%252Band%252BJ.D.%252BBarker"
        },
        {
            "name": "Bookshop",
            "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781538753088&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DDEATH%2BOF%2BTHE%2BBLACK%2BWIDOW"
        },
        {
            "name": "IndieBound",
            "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781538753088%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DDEATH%2BOF%2BTHE%2BBLACK%2BWIDOW%2BJames%2BPatterson%2Band%2BJ.D.%2BBarker%26aff%3DNYT"
        }
    ],
    "__v": 0
}
];





const containerFromMarcup = document.querySelector('.add-books-backend');

// -------  Modal -----////

backdrop.addEventListener('click', onBackdropClick);
modalClose.addEventListener('click', onCloseModal);
window.addEventListener('keydown', onEscKeyPress);

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

const listAddBook = document.querySelector('.list-books-by-category');
const listTopBook = document.querySelector('.container-best-books');

listAddBook.addEventListener('click', onClick);
//listTopBook.addEventListener('click', onClick);

const savedLokal = localStorage.getItem(DATA_KEY);
const parseLocal = JSON.parse(savedLokal);
   if (!parseLocal) {
        addLocal.hidden = false;
        removeLocal.hidden = true;
    } else {
    addLocal.hidden = true;
    removeLocal.hidden = false;
};
modalBtn.addEventListener('click', onAddLocal);
function onClick(evt) {

    backdrop.classList.remove('is-hidden')
  window.addEventListener('keydown', onEscKeyPress);
  

  if (!evt.target.classList.contains('js-target')) {
    return;
  }
  const bookId =
    evt.target.dataset.bookId ?? evt.target.closest('li').dataset.bookId;
    console.log('Get BOOK ID ======', bookId);
    
    getBooksById(bookId)
        .then(data => {
            let imgBook = data.book_image;
            let nameBook = data.title;
            let description = data.description;
          let author = data.author;
          let id = data._id;

            containerFromMarcup.innerHTML = marcup(imgBook, nameBook, description, author, id);
            
          console.log('###', data);
          
          console.log('***', id);
})
    .catch(rej => console.log(rej));
  
  
}

function marcup(imgBook, nameBook, description, author, id)
        {
      
    return  `
  <div class="backend-box">
  <img class="img-book" src="${imgBook}" alt="${nameBook}" />
  <div>
 <h2 class="title-book">${nameBook}</h2>
 <h4 class="author-book">${author}</h4>
 <p class="descr-book">${description}</p>
 <ul class="modal-img-list">
        <li>
          <a href="">
            <picture>
              <source
                srcset="
                  ./img/shop-logo-amazon.png 1x,
                  ./img/shop-logo-amazon.png 2x
                "
                media="(min-width: 1440px)"
              />
              <source
                srcset="
                  ./img/shop-logo-amazon.png 1x,
                  ./img/shop-logo-amazon.png 2x
                "
                media="(min-width: 768px)"
              />
              <source
                srcset="
                  ./img/shop-logo-amazon.png 1x,
                  ./img/shop-logo-amazon.png 2x
                "
                media="(max-width: 767px)"
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
          <a href="">
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



function onAddLocal(evt) {
    console.log('btn',  evt.target);
            //const bookToRemoveId = parseLocal.find(book => book._id === `${id}`);
            //console.log('id', bookToRemoveId);
      // if (bookToRemoveId !== -1) {
      //   //parseLocal.splice(bookToRemoveId, 1);
      //   addLocal.hidden = true;
      //   removeLocal.hidden = false;
      //   p.hidden = false;
      //   localStorage.setItem(DATA_KEY, JSON.stringify(parseLocal));
      // }

  //const bookId = evt.target.closest('.shop-list-item').dataset.id;

  // const bookToRemoveId = parseLocal.findIndex(book => book._id === bookId);

  //     if (bookToRemoveId !== -1) {
  //       //parseLocal.splice(bookToRemoveId, 1);
  //       addLocal.hidden = true;
  //       removeLocal.hidden = false;
  //       p.hidden = false;
  //       localStorage.setItem(DATA_KEY, JSON.stringify(parseLocal));
  //     }

        
    
    // modalBtn.addEventListener('click', onRemoveLocal);
    // function onRemoveLocal() {
    //     if (removeLocal.textContent) {
    //         localStorage.removeItem(KEY_BOOK);
    //         addLocal.hidden = false;
    //         removeLocal.hidden = true;
    //         p.hidden = true;
    //     }
    // }
    
}

    
 
   
    



   




