//const { default: iziToast } = require('izitoast');
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
const button = document.querySelector('button');
const inputSearch = document.querySelector('.search');

import { renderUsers } from './render-functions';

export function fetchImages() {
  let inputSearchValue = inputSearch.value;
  const url = `https://pixabay.com/api/?key=42766573-a347fa67a5b7233d1286bfaa7&q=${inputSearchValue}&image_type=photo&orientation=horizontal&safesearch=true`;

  if (inputSearchValue) {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })

      .then(data => {
        if (data.hits.length === 0) {
          iziToast.error({
            title: '',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
        } else {
          const imagesData = {
            totalHits: data.totalHits,
            total: data.total,
            images: data.hits,
          };
          renderUsers(data.hits);
        }
      })

      .catch(error => {
        console.log(error);
      });
  }
}
