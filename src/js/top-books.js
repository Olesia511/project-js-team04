import { getTopBooksArr } from './axios';

getTopBooksArr()
  .then(res => {
    console.log(`getTopBooksArr`, res);
  })
  .catch(rej => console.log(`rej`, rej));
