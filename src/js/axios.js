import axios from 'axios';

const perPage = 10;
const currentPage = 1;
const searchValue = 'cat';

const BASE_URL = 'https://pixabay.com/api/';
const AUTH_KEY = '39799120-0adfdb8bf4f296c3a7d41d46c';

// function axios

async function getResponseArr() {
  const resp = await axios.get(`${BASE_URL}?key=${AUTH_KEY}`, {
    params: {
      q: `${searchValue}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: `${perPage}`,
      page: `${currentPage}`,
    },
  });

  const arr = await resp.data;
  return arr;
}
console.log(getResponseArr());
