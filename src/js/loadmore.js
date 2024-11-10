import { refs } from './refs';
export function showBtn() {
  refs.loadmore.classList.remove('is-hidden');
}
export function hideBtn() {
  refs.loadmore.classList.add('is-hidden');
}
