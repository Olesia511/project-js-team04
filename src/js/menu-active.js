// const headerLink = document.querySelector('.site-nav-item-home');
// const shopLink = document.querySelector('.site-nav-item-shop');
// const header = document.querySelector('.header-container');
// // const LOCAL_CURRENT = 'current-page';
// let currentPage;

// const getCurrentPage = localStorage.getItem('current-page');

// console.log(`currentPage`, getCurrentPage);
// header.addEventListener(`click`, activeHome);

// if (getCurrentPage === null || getCurrentPage === undefined) {
//   currentPage = 'home';
//   localStorage.setItem('current-page', currentPage);
// }

// const checkCurrent = localStorage.getItem('current-page');
// // console.log(`checkCurrent`, checkCurrent);
// // console.log(checkCurrent === 'home');
// (() => {
//   if (checkCurrent === 'home') {
//     headerLink.classList.add('active');
//     shopLink.classList.remove('active');
//   } else {
//     headerLink.classList.remove('active');
//     shopLink.classList.add('active');
//   }
// })();
// // console.log(`123`, header);

// function activeHome(evt) {
//   evt.preventDefault();
//   if (
//     evt.target.classList.contains('site-nav-item-home') &&
//     checkCurrent === 'home'
//   ) {
//     return;
//   } else if (
//     evt.target.classList.contains('site-nav-item-shop') &&
//     checkCurrent === 'shop'
//   ) {
//     return;
//   } else if (
//     evt.target.classList.contains('site-nav-item-home') &&
//     checkCurrent !== 'home'
//   ) {
//     currentPage = 'home';
//     localStorage.setItem('current-page', currentPage);
//     window.location.href = shopLink.getAttribute('href');
//   } else if (
//     evt.target.classList.contains('site-nav-item-shop') &&
//     checkCurrent !== 'shop'
//   ) {
//     currentPage = 'shop';
//     localStorage.setItem('current-page', currentPage);
//     window.location.href = headerLink.getAttribute('href');
//   }
// }

// {
//   console.log('Yeeeeeeeeeeeeeep');
//   shopLink.classList.remove('active');
//   headerLink.classList.add('active');
// } else if ( evt.target.classList.contains('shopping-link') ||
//   evt.target.classList.contains('site-nav-item-shop'))
// {
//   console.log('Hiiiiiiiiiiiiiiiiiiiiiiiiiiii');
//   shopLink.classList.add('active');
//   headerLink.classList.remove('active');
// } else if (evt.target.classList.contains('active')) {
//   return;
// }
// ===================================

// // Отримуємо поточну сторінку з localStorage або встановлюємо значення за замовчуванням.
// let currentPage = localStorage.getItem('current-page') || 'home';

// // Визначаємо елементи навігації.
// const headerLink = document.querySelector('.site-nav-item-home');
// const shopLink = document.querySelector('.site-nav-item-shop');

// // Функція для встановлення активної сторінки та оновлення localStorage.
// function setActivePage(page) {
//   // Оновлюємо поточну сторінку в localStorage.
//   localStorage.setItem('current-page', page);

//   // Змінюємо колір назв сторінок відповідно до поточної сторінки.
//   if (page === 'home') {
//     headerLink.classList.add('active');
//     shopLink.classList.remove('active');
//   } else {
//     headerLink.classList.remove('active');
//     shopLink.classList.add('active');
//   }
// }

// // Встановлюємо активну сторінку на основі даних з localStorage.
// setActivePage(currentPage);

// // Додаємо обробник подій для переходу на сторінку "Home".
// headerLink.addEventListener('click', evt => {
//   evt.preventDefault();
//   if (currentPage !== 'home') {
//     setActivePage('home');
//     // Редирект на сторінку "Home".
//     window.location.href = headerLink.getAttribute('href');
//   }
// });

// // Додаємо обробник подій для переходу на сторінку "Shop".
// shopLink.addEventListener('click', evt => {
//   evt.preventDefault();
//   if (currentPage !== 'shop') {
//     setActivePage;
//     setActivePage('shop');
//     // Редирект на сторінку "Shop".
//     window.location.href = shopLink.getAttribute('href');
//   }
// });

// =============================================================================
// const headerLink = document.querySelector('.site-nav-item-home');
// const shopLink = document.querySelector('.site-nav-item-shop');
// Отримуємо поточний хеш URL (наприклад, "#home" або "#shop").
const currentPageHash = window.location.href;
console.log(`currentPageHash`, window.location.href);
console.log(currentPageHash.includes('shopping-list'));
// Визначаємо елементи навігації.
const headerLinkHome = document.querySelector('.site-nav-item-home');
const headerLinkShop = document.querySelector('.site-nav-item-shop');
// const navLinkHome = document.querySelector('.mobile-list');
const firstLinkMobile = document.querySelector('.home-target');
const secondLinkMobile = document.querySelector('.shop-target');
console.log(firstLinkMobile);
console.log(secondLinkMobile);
// Функція для встановлення активної сторінки та оновлення кольорів.
function setActivePage() {
  // Змінюємо колір назв сторінок відповідно до поточного хешу.
  if (currentPageHash.includes('index')) {
    headerLinkHome.classList.add('active');
    headerLinkShop.classList.remove('active');
    firstLinkMobile.classList.add('active');
    secondLinkMobile.classList.remove('active');
  } else if (currentPageHash.includes('shopping-list')) {
    headerLinkHome.classList.remove('active');
    headerLinkShop.classList.add('active');
    firstLinkMobile.classList.remove('active');
    secondLinkMobile.classList.add('active');
  }
}

// Встановлюємо активну сторінку на основі поточного хешу URL.
setActivePage(currentPageHash);

// Додаємо обробники подій для кліків на навігаційні посилання.
headerLinkHome.addEventListener('click', () => {
  setActivePage();
});

headerLinkShop.addEventListener('click', () => {
  setActivePage();
});
