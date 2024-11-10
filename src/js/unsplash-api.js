import axios from 'axios';
export const PER_PAGE = 12;
export async function getPhotos(query, page) {
  const BASE_URL = 'https://api.unsplash.com';
  const API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';
  const endPoint = '/search/photos';

  try {
    const response = await axios.get(`${BASE_URL}${endPoint}`, {
      params: {
        query,
        page,
        per_page: PER_PAGE,
        orientation: 'portrait',
        client_id: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
