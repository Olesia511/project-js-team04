// const currentPageHash = window.location.href;

// const headerLinkHome = document.querySelector('.site-nav-item-home');
// const headerLinkShop = document.querySelector('.site-nav-item-shop');
// const firstLinkMobile = document.querySelector('.home-target');
// const secondLinkMobile = document.querySelector('.shop-target');

// function setActivePage() {
//   if (currentPageHash.includes('index')) {
//     headerLinkHome.classList.add('active');
//     headerLinkShop.classList.remove('active');
//     firstLinkMobile.classList.add('active');
//     secondLinkMobile.classList.remove('active');
//   } else if (currentPageHash.includes('shopping-list')) {
//     headerLinkHome.classList.remove('active');
//     headerLinkShop.classList.add('active');
//     firstLinkMobile.classList.remove('active');
//     secondLinkMobile.classList.add('active');
//   }
// }

// setActivePage(currentPageHash);

// headerLinkHome.addEventListener('click', () => {
//   setActivePage();
// });

// headerLinkShop.addEventListener('click', () => {
//   setActivePage();
// });

//================================

const currentPageHash = window.location.href;

const headerLinkHome = document.querySelector('.site-nav-item-home');
const headerLinkShop = document.querySelector('.site-nav-item-shop');
const firstLinkMobile = document.querySelector('.home-target');
const secondLinkMobile = document.querySelector('.shop-target');

function setActivePage() {
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

document.addEventListener('DOMContentLoaded', function () {
  setActivePage();
});

headerLinkHome.addEventListener('click', () => {
  setActivePage();
});

headerLinkShop.addEventListener('click', () => {
  setActivePage();
});
