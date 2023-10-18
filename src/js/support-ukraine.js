const charities = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: 'data:image/png;base64,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',
    // img: '../img/save-the-children.png',
    // img2x: '../img/save-the-children-2x.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: '../img/project-hope.png',
    // img2x: '../img/project-hope-2x.png',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: '../img/international-medical-corps.png',
    // img2x: '../img/international-medical-corps-2x.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: '../img/razom.png',
    // img2x: '../img/razom-2x.png',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: '../img/action-against-hunger.png',
    // img2x: '../img/action-against-hunger-2x.png',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: '../img/charity-foundation-sergiy-prytula.png',
    // img2x: '../img/charity-foundation-sergiy-prytula-2x.png',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: '../img/medecins-sans-frontieres.png',
    // img2x: '../img/medecins-sans-frontieres-2x.png',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: '../img/world-vision.png',
    // img2x: '../img/world-vision-2x.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: '../img/united24.png',
    // img2x: '../img/united24-2x.png',
  },
];

const list = document.querySelector('.list');
const toggleButton = document.getElementById('toggleButton');
const svgIcon = toggleButton.querySelector('svg use');
let areItemsVisible = true;
let animationState = 0;

function toggleItemsVisibility() {
  list.innerHTML = '';

  const startIndex = areItemsVisible ? 0 : 3;
  const endIndex = areItemsVisible ? 6 : 9;

  charities.slice(startIndex, endIndex).forEach((charity, index) => {
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noopener noreferrer nofollow';
    const number = document.createElement('span');
    const charityNumber = (startIndex + index + 1).toString().padStart(2, '0');

    number.textContent = charityNumber;

    const img = document.createElement('img');
    img.src = charity.img;
    img.srcset = `${charity.img}`;
    // 1x, ${charity.img2x} 2x
    img.alt = charity.title;
    img.classList.add('white-image');

    link.href = charity.url;

    number.classList.add('number');

    link.appendChild(img);
    item.appendChild(number);
    item.appendChild(link);

    list.appendChild(item);
  });

  areItemsVisible = !areItemsVisible;

  animationState = 1 - animationState;

  svgIcon.setAttribute(
    'href',
    areItemsVisible
      ? './img/icon.svg#icon-support-ukr-scroll-up'
      : './img/icon.svg#icon-support-ukr-scroll-down'
  );
}

toggleButton.addEventListener('click', toggleItemsVisibility);

toggleItemsVisibility();
