// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { renderUsers } from './js/render-functions';
import { fetchImages } from './js/pixabay-api';

const button = document.querySelector('button');
const inputSearch = document.querySelector('.search');
const imagesGallery = document.querySelector('.gallery');
const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const gallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

gallery.refresh();

const submitSearchImages = form.addEventListener('submit', function (e) {
  e.preventDefault();
  loader.style.display = 'block';
  imagesGallery.innerHTML = '';
  fetchImages();
  form.reset();
});
