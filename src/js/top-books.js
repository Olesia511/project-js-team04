import { getTopBooksArr } from './axios-fetch';

const container = document.querySelector('.container-best-books');

async function topBooksRequest() {
  container.classList.add('loader');
  await getTopBooksArr()
    .then(res => {
      const nameCategory = res
        .map(category => {
          const { list_name, books } = category;
          const mappedBooks = books
            .map(
              ({ _id, author, book_image, title }) => `
              <li data-book-id="${_id}" class="book-item js-target">
                <div class="cover-wrap">
                  <img class="book-img js-target" data-src="${book_image}" alt="${title}" loading="lazy"/>
                  <p class="cover-text">quick view</p>
                </div>
                <div class="title-author-container">
                  <h2 class="book-title js-target">${title}</h2>
                  <h3 class="author js-target">${author}</h3>
                </div>
              </li>`
            )
            .join('');

          const categoryList = `
            <div class="category-container">
              <h2 class="category-title">${list_name}</h2>
              <ul class="book-list">${mappedBooks}</ul>
              <button data-category="${list_name}" class="see-more-btn">SEE MORE</button>
            </div>`;

          return categoryList;
        })
        .join('');

      const topTitle = `
        <h1 class="title">
          Best Sellers <span class="highlighted-text">Books</span>
        </h1>`;

      container.innerHTML = topTitle + nameCategory;

      // Ленивая загрузка изображений
      const images = document.querySelectorAll('.book-img');
      images.forEach(image => {
        image.setAttribute('src', image.getAttribute('data-src'));
        image.onload = () => image.removeAttribute('data-src');
      });
      container.classList.remove('loader');
    })
    .catch(rej => console.log(`rej`, rej));
}

export { topBooksRequest };
