import { getPhotos, PER_PAGE } from './unsplash-api';
import { refs } from './refs';
import { createMarkup } from './createmarkup';
import { showLoader, hideLoader } from './loader';
import { showBtn, hideBtn } from './loadmore';

refs.form.addEventListener('submit', onSubmit);
refs.loadmore.addEventListener('click', onClick);
let page = 1;
let searchQuery = null;

async function onSubmit(event) {
  event.preventDefault();
  refs.list.innerHTML = '';
  showLoader();
  page = 1;

  searchQuery = event.target.elements['user-search-query'].value.trim();

  try {
    const responce = await getPhotos(searchQuery, page);
    refs.list.innerHTML = createMarkup(responce.results);

    responce.total > PER_PAGE ? showBtn() : hideBtn();
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
}

async function onClick(event) {
  page += 1;
  showLoader();

  try {
    const responce = await getPhotos(searchQuery, page);
    refs.list.insertAdjacentHTML('beforeend', createMarkup(responce.results));

    const lastPage = Math.ceil(responce.total / PER_PAGE);

    lastPage === page ? hideBtn() : showBtn();
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
}
