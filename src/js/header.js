const refs = {
  openBurgerBtn: document.querySelector('.burger-menu'),
  closeBurgerBtn: document.querySelector('.mobile-menu__button'),
  burger: document.querySelector('.mobile-menu-container'),
  themeSwitcher: document.querySelector('input[type="checkbox"]'),
};
// console.dir(refs.themeSwitcher);
const boDy = document.querySelector(`body`);
const headerDark = document.querySelector('.header-container');
const iconCloseMobile = document.querySelector('.icon-close-mobile');
const iconCloseBurger = document.querySelector('.icon-close-burger');
const modalTheme = document.querySelector('.modal');
const iconModalClose = document.querySelector('.icon-close-modal');
const burgerMenu = document.querySelector('.menu-burger-icon');
const basketIcon = document.querySelector('.basket-icon');
const shopListText = document.querySelector('.shop-list-placeholder');
const navigMenu = document.querySelector(`.site-nav`);

// console.log(`++++++`, );

const LOCAL_KEY = 'theme';
let theme;

navigMenu.addEventListener(`click`, activePage);

function activePage(evt) {
  if (
    !evt.target.classList.contains(`site-nav-item-home`) ||
    !evt.target.classList.contains(`site-nav-item-shop`)
  ) {
    return;
  } else if (evt.target.classList.contains(`active`)) {
    return;
  } else {
    console.log(evt.target);
  }
}

// localStorage.setItem(LOCAL_KEY, JSON.stringify(theme));
const getKey = localStorage.getItem(LOCAL_KEY);
console.log(getKey);
if (getKey === null || getKey === undefined) {
  theme = 'light';
  localStorage.setItem(LOCAL_KEY, JSON.stringify(theme));
  refs.themeSwitcher.checked = false;
}

if (getKey) {
  const checkKey = localStorage.getItem(LOCAL_KEY);

  if (checkKey === 'dark') {
    refs.themeSwitcher.checked = true;
    changeTheme();

    console.log('1111111');
  } else {
    refs.themeSwitcher.checked = false;

    console.log('222222');
  }
}

refs.themeSwitcher.addEventListener('change', setTheme);
// refs.themeSwitcher.checked = true;
// console.log(themeSwitcher.checked);

// console.log(checking.checked);
// refs.openBurgerBtn.addEventListener('click', toggleModal);
// refs.closeBurgerBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.burger.classList.toggle('is-hidden-header');
}

function changeTheme() {
  boDy.classList.add('dark');
  headerDark.classList.add('dark');
  iconCloseMobile.classList.add('dark');
  iconCloseBurger.classList.add('dark');
  burgerMenu.classList.add('dark');
  basketIcon.classList.add('dark');
  // shopListText.classList.add('dark');
  modalTheme.classList.add('dark');
  iconModalClose.classList.add('dark');
}

function changeDarkTheme() {
  boDy.classList.remove('dark');
  headerDark.classList.remove('dark');
  iconCloseMobile.classList.remove('dark');
  iconCloseBurger.classList.remove('dark');
  burgerMenu.classList.remove('dark');
  basketIcon.classList.remove('dark');
  // shopListText.classList.remove('dark');
  modalTheme.classList.remove('dark');
  iconModalClose.classList.remove('dark');
}

// refs.themeSwitcher.addEventListener('change', setTheme);

function setTheme(evt) {
  const toggleSwitches = evt.target.checked;
  console.log(toggleSwitches);
  if (toggleSwitches) {
    localStorage.setItem(LOCAL_KEY, 'dark');
    changeTheme();
  } else {
    localStorage.setItem(LOCAL_KEY, 'light');
    changeDarkTheme();
  }
}

(() => {
  const backdrop = document.querySelector('.backdrop-header');
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuButtons = document.querySelectorAll('.js-close-menu');
  const burger = document.querySelector('.burger-menu');
  const closeBtn = document.querySelector('.mob-menu-close');
  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    burger.classList.toggle('is-hidden-burger');
    mobileMenu.classList.toggle('is-open');
    backdrop.classList.toggle('is-hidden-mobile');
    closeBtn.classList.toggle('is-hidden-burger');
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
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

// setTheme();

// function setTheme(theme) {
//   localStorage.setItem(LOCAL_KEY, JSON.stringify(theme));

//   const toggleSwitches = document.querySelectorAll(
//     '.js-common-toggle input[type="checkbox"]'
//   );
//   toggleSwitches.forEach(function (toggleSwitch) {
//     if (theme === 'dark') {
//       toggleSwitch.checked = true;
//     } else {
//       toggleSwitch.checked = false;
//     }
//   });
// }

// const currentTheme = localStorage.getItem('theme');

// if (currentTheme) {
//   setTheme(currentTheme);
// } else {
//   setTheme('light');
// }

// const toggleSwitches = document.querySelectorAll(
//   '.js-common-toggle input[type="checkbox"]'
// );
// toggleSwitches.forEach(function (toggleSwitch) {
//   toggleSwitch.addEventListener(
//     'change',
//     function (e) {
//       if (e.target.checked) {
//         setTheme('dark');
//       } else {
//         setTheme('light');
//       }
//     },
//     false
//   );
// });
