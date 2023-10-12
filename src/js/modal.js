
import { getBooksById } from './axios';

const modal = document.querySelector('.modal');
const modalOpen = document.querySelector('.modal-open');
const backdrop = document.querySelector('.js-backdrop');
const modalClose = document.querySelector('.close-btn-modal');
const marcupModal = document.querySelector('.marcup');

const containerFromMarcup = document.querySelector('.add-books-backend');

modalOpen.addEventListener('click', onOpenModal);

backdrop.addEventListener('click', onBackdropClick);

modalClose.addEventListener('click', onCloseModal);

window.addEventListener('keydown', onEscKeyPress);

function onOpenModal() {
    
    backdrop.classList.remove('is-hidden')
    window.addEventListener('keydown', onEscKeyPress);
    getBooksById();
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

// getBooksById().then(data => {
// const creatMarcup = data.map(({ author, book_image, list_name, description }) => `<img src="${book_image}" alt="${list_name}" />
// <h2>${list_name}</h2>
// <h4>${author}</h4>
// <p>${description}</p>`).join('');
//   containerFromMarcup.insertAdjacentHTML('beforeend', creatMarcup);
  

  
  
// })
//   .catch(err => {
    
    
//     console.log(err);
//   });
// marcupModal.addEventListener('')

//  getBooksById()
//     .then(data => {
      
//       let imgBook = data[0].book_image;
//       let nameBook = data[0].list_name;
//       let description = data[0].description;
//       let author = data[0].author
      
//       containerFromMarcup.innerHTML = marcup(imgBook, nameBook, description, author);
      
      
//     //   refs.container.classList.remove("is-hidden");
//     //    refs.loader.hidden = true;
      
//     })
//     .catch(err => {
      
//       console.log(err);
//     })


// function marcup(imgBook, nameBook, description, author) {

//   return  `
//   <img src="${imgBook}" alt="${list_name}" />
// // <h2>${nameBook}</h2>
// // <h4>${author}</h4>
// // <p>${description}</p>`;
// }