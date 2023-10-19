import { charities } from './support-arr';

const list = document.querySelector('.list');
const toggleButton = document.getElementById('toggleButton');
const butnSupDown = document.querySelector('.button-sup-svg');
const butnSupUp = document.querySelector('.button-sup-svg-up');
let areItemsVisible = true;
let animationState = 0;

function toggleItemsVisibility() {
  butnSupUp.classList.toggle('is-hidden-support');
  butnSupDown.classList.toggle('is-hidden-support');

  list.innerHTML = '';

  const startIndex = areItemsVisible ? 0 : 3;
  const endIndex = areItemsVisible ? 6 : 9;

  charities.slice(startIndex, endIndex).forEach((charity, index) => {
    const item = document.createElement('li');
    const link = document.createElement('a');
    item.classList.add('show');
    item.style.opacity = 1;
    link.target = '_blank';
    link.rel = 'noopener noreferrer nofollow';
    link.classList.add('link-support');
    const number = document.createElement('span');
    const charityNumber = (startIndex + index + 1).toString().padStart(2, '0');

    number.textContent = charityNumber;

    const img = document.createElement('img');
    img.src = charity.img;
    img.srcset = `${charity.img}`;
    img.alt = charity.title;
    img.classList.add(`sup-img-${index + 1}`);
    img.height = `${charity.height}`;

    link.href = charity.url;

    number.classList.add('number');

    link.appendChild(img);
    item.appendChild(number);
    item.appendChild(link);

    list.appendChild(item);
  });

  areItemsVisible = !areItemsVisible;

  animationState = 1 - animationState;
  toggleButton.blur();
}

toggleButton.addEventListener('click', toggleItemsVisibility);

toggleItemsVisibility();
