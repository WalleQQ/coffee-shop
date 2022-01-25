import axios from 'axios';

export const dbInstance = axios.create({
  baseURL:
    'https://walleqq-coffee-shop-default-rtdb.europe-west1.firebasedatabase.app/app/',
});
