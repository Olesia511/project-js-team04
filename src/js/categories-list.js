import { getCategoryListArr } from './axios';

getCategoryListArr()
  .then(res => {
    console.log(`getCategoryListArr`, res);
  })
  .catch(rej => console.log(`rej`, rej));
