// Add imports above this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line

createGallery(galleryItems);

function createGallery(images) {
  const galleryEl = document.querySelector('.gallery');

  images.forEach(image => {
    const galleryItemEl = createGalleryItem(image);
    galleryEl.append(galleryItemEl);
  });

  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

function createGalleryItem({ preview, original, description }) {
  const galleryItemEl = document.createElement('li');

  galleryItemEl.classList.add('gallery-item');

  const linkEl = document.createElement('a');
  linkEl.classList.add('gallery-link');
  linkEl.setAttribute('href', original);
  galleryItemEl.append(linkEl);

  const imgEl = document.createElement('img');
  imgEl.classList.add('gallery-image');
  imgEl.setAttribute('src', preview);
  imgEl.setAttribute('data-source', original);
  imgEl.setAttribute('alt', description);
  linkEl.append(imgEl);

  return galleryItemEl;
}
