
import { getBooksById } from './axios';

const modal = document.querySelector('.modal');
const modalOpen = document.querySelector('.modal-open');
const backdrop = document.querySelector('.js-backdrop');
const modalClose = document.querySelector('.close-btn-modal');
const marcupModal = document.querySelector('.marcup');
const modalBtn = document.querySelector('.btn-add-local');
const addLocal = document.querySelector('.add-local');
const removeLocal = document.querySelector('.remove-local');
console.log(modalBtn);
const KEY_BOOK = 'user-books'; // localStorage
const bookList = {};



const containerFromMarcup = document.querySelector('.add-books-backend');

// -------  Modal -----////

// modalOpen.addEventListener('click', onOpenModal);

backdrop.addEventListener('click', onBackdropClick);

modalClose.addEventListener('click', onCloseModal);



window.addEventListener('keydown', onEscKeyPress);
    
modalBtn.addEventListener('click', onAddLocal);




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

// console.log('qweqwe', listAddBook);
listAddBook.addEventListener('click', onClick);
listTopBook.addEventListener('click', onClick);






    function onClick(evt) {
    
        
            
    const parseLocal = JSON.parse(localStorage.getItem(KEY_BOOK));

    if (!parseLocal) {
        addLocal.hidden = false;
        removeLocal.hidden = true;
} else {
    addLocal.hidden = true;
    removeLocal.hidden = false;
        }


        //// ++++++ //////
         
     
        ///+++////
        

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
            let author = data.author

            containerFromMarcup.innerHTML = marcup(imgBook, nameBook, description, author);
            
            console.log(data);


            
        })
        .catch(rej => console.log(rej));
    
   }



function marcup(imgBook, nameBook, description, author)
        {
      
  return  `
  <img class="img-book" src="${imgBook}" alt="${nameBook}" />
 <h2 class="title-book">${nameBook}</h2>
 <h4 class="author-book">${author}</h4>
 <p class="descr-book">${description}</p>`;
}

  




function onAddLocal(evt) {
    console.log('qwe', evt.target);
    // const textBtn = evt.target.classList.contains('js-btn-local');
    

    // if (!textBtn) {
    // return;
    // }
    if (addLocal.textContent) {
        localStorage.setItem(KEY_BOOK, bookList);
        
    } else {
       console.log('---');
    }
    
    
    
    
    // else {
    //     removeLocal.textContent
    // }
   
    
}


   

//------ Local Storage -----//



// console.log("123", addLocalBtn);



// const addLocal = [];
// const removeLocal = [];

// function onAddLocal({imgBook, nameBook, description, author}) {
//     addLocal.push( imgBook, nameBook, description, author);
//     console.log(addLocal);
// }