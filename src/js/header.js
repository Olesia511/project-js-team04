const refs = {
  openBurgerBtn: document.querySelector('.burger-menu'),
  burger: document.querySelector('.mobile-menu-container'),
  themeSwitcher: document.querySelector('input[type="checkbox"]'),
};

const boDy = document.querySelector(`body`);
const headerDark = document.querySelector('.header-container');
const iconCloseMobile = document.querySelector('.icon-close-mobile');
const iconCloseBurger = document.querySelector('.icon-close-burger');
const burgerMenuIcon = document.querySelector('.menu-burger-icon');
const basketIcon = document.querySelector('.basket-icon');
const shopListText = document.querySelector('.shop-list-placeholder');
const navigMenu = document.querySelector(`.site-nav`);

const amazonDarkTheme = document.querySelector('.img-modal-amazon');
const amazonShopingDark = document.querySelector('.amazon-icon');
const backGroundShopingDark = document.querySelector('.shop-list-item');

const LOCAL_KEY = 'theme';
let theme;

const getKey = localStorage.getItem(LOCAL_KEY);

if (getKey === null || getKey === undefined) {
  theme = 'light';
  localStorage.setItem(LOCAL_KEY, JSON.stringify(theme));
  refs.themeSwitcher.checked = false;
}

(() => {
  if (getKey) {
    if (getKey === 'dark') {
      refs.themeSwitcher.checked = true;
      changeTheme();
    } else {
      refs.themeSwitcher.checked = false;
    }
  }
})();
refs.themeSwitcher.addEventListener('change', setTheme);

function toggleModal() {
  refs.burger.classList.toggle('is-hidden-header');
}

function changeTheme() {
  boDy.classList.add('dark');
  headerDark.classList.add('dark');
  iconCloseMobile.classList.add('dark');
  iconCloseBurger.classList.add('dark');
  burgerMenuIcon.classList.add('dark');
  basketIcon.classList.add('dark');
}

function changeDarkTheme() {
  boDy.classList.remove('dark');
  headerDark.classList.remove('dark');
  iconCloseMobile.classList.remove('dark');
  iconCloseBurger.classList.remove('dark');
  burgerMenuIcon.classList.remove('dark');
  basketIcon.classList.remove('dark');
}

refs.themeSwitcher.addEventListener('change', setTheme);

function setTheme(evt) {
  const toggleSwitches = evt.target.checked;

  if (toggleSwitches) {
    localStorage.setItem(LOCAL_KEY, 'dark');
    changeTheme();
  } else {
    localStorage.setItem(LOCAL_KEY, 'light');
    changeDarkTheme();
  }
}

// ==== Mobile-menu open /close  ====

(() => {
  const backdrop = document.querySelector('.backdrop-header');
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuButtons = document.querySelectorAll('.js-close-menu');
  const closeBtn = document.querySelector('.mob-menu-close');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);

    backdrop.classList.toggle('is-hidden-mobile');
    closeBtn.classList.toggle('is-hidden-burger');
    burgerMenuIcon.classList.toggle('is-hidden-burger');
    iconCloseBurger.classList.toggle('is-hidden-burger');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuButtons.forEach(closeMenuBtn => {
    closeMenuBtn.addEventListener('click', toggleMenu);
  });

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    backdrop.classList.add('is-hidden-mobile');
    burgerMenuIcon.classList.remove('is-hidden-burger');
    iconCloseBurger.classList.add('is-hidden-burger');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
