import { getPhotos } from './unsplash-api';
import { refs } from './refs';
import { createMarkup } from './createmarkup';

refs.form.addEventListener('submit', onSubmit);
let page = 1;
async function onSubmit(event) {
  event.preventDefault();

  const searchQuery = event.target.elements['user-search-query'].value.trim();

  try {
    const responce = await getPhotos(searchQuery, page);
    refs.list.innerHTML = createMarkup(responce.results);
  } catch (error) {
    console.log(error);
  }
}
