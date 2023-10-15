const refs = {
  openBurgerBtn: document.querySelector('.burger-menu'),
  closeBurgerBtn: document.querySelector('.mobile-menu__button'),
  burger: document.querySelector('.mobile-menu-container'),
  themeSwitcher: document.querySelector('input[type="checkbox"]'),
};
console.dir(refs.themeSwitcher);
const boDy = document.querySelector(`body`);

const LOCAL_KEY = 'theme';
let theme;

// localStorage.setItem(LOCAL_KEY, JSON.stringify(theme));
const getKey = localStorage.getItem(LOCAL_KEY);
console.log(getKey);
if (getKey === null || undefined) {
  theme = 'light';
  localStorage.setItem(LOCAL_KEY, JSON.stringify(theme));
  refs.themeSwitcher.checked = false;
}
// const checkKey = JSON.parse(localStorage.getItem(LOCAL_KEY));

if (getKey) {
  const checkKey = JSON.parse(localStorage.getItem(LOCAL_KEY));

  if (checkKey === 'dark') {
    refs.themeSwitcher.checked = true;
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
refs.openBurgerBtn.addEventListener('click', toggleModal);
refs.closeBurgerBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.burger.classList.toggle('is-hidden-header');
}

// refs.themeSwitcher.addEventListener('change', setTheme);

function setTheme(evt) {
  const toggleSwitches = evt.target.checked;
  console.log(toggleSwitches);
  if (toggleSwitches) {
    localStorage.setItem(LOCAL_KEY, 'dark');
  } else {
    localStorage.setItem(LOCAL_KEY, 'light');
  }
}

// setTheme();

// function setTheme(theme) {
//   localStorage.setItem(LOCAL_KEY, JSON.stringify(theme));

//   const toggleSwitches = document.querySelectorAll(
//     '.common-toggle input[type="checkbox"]'
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
//   '.common-toggle input[type="checkbox"]'
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
