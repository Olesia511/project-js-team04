const refs = {
  openBurgerBtn: document.querySelector('.burger-menu'),
  closeBurgerBtn: document.querySelector('.mobile-menu__button'),
  burger: document.querySelector('.mobile-menu-container'),
};

refs.openBurgerBtn.addEventListener('click', toggleModal);
refs.closeBurgerBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.burger.classList.toggle('is-hidden');
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  const toggleSwitches = document.querySelectorAll(
    '.common-toggle input[type="checkbox"]'
  );
  toggleSwitches.forEach(function (toggleSwitch) {
    if (theme === 'dark') {
      toggleSwitch.checked = true;
    } else {
      toggleSwitch.checked = false;
    }
  });
}

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  setTheme(currentTheme);
} else {
  setTheme('light');
}

const toggleSwitches = document.querySelectorAll(
  '.common-toggle input[type="checkbox"]'
);
toggleSwitches.forEach(function (toggleSwitch) {
  toggleSwitch.addEventListener(
    'change',
    function (e) {
      if (e.target.checked) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    },
    false
  );
});
