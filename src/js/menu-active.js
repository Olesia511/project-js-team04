const currentPageHash = window.location.href;

const headerLinkHome = document.querySelector('.site-nav-item-home');
const headerLinkShop = document.querySelector('.site-nav-item-shop');
const firstLinkMobile = document.querySelector('.home-target');
const secondLinkMobile = document.querySelector('.shop-target');

function setActivePage(currentPageHash) {
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
setActivePage(currentPageHash);

document.addEventListener('DOMContentLoaded', function () {
  setActivePage(currentPageHash);
});

headerLinkHome.addEventListener('click', () => {
  setActivePage('index');
});

headerLinkShop.addEventListener('click', () => {
  setActivePage('shopping-list');
});

headerLinkHome.addEventListener('click', evt => {
  evt.preventDefault();
  if (!currentPageHash.includes('index')) {
    setActivePage('index');
    // Перенаправлення на сторінку home
    window.location.href = 'index';
  }
});

headerLinkShop.addEventListener('click', evt => {
  evt.preventDefault();
  if (!currentPageHash.includes('shopping-list')) {
    setActivePage('shopping-list');
    // Перенаправлення на сторінку shop
    window.location.href = 'shopping-list';
  }
});
