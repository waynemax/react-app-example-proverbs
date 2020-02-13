export const domain = 'https://api.devimperial.com/api/';

export const proverbs = {
  categories: {
    method: 'GET',
    path: domain + 'proverbs.categories'
  },
  search: {
    method: 'GET',
    path: domain + 'proverbs.search'
  },
  addView: {
    method: 'POST',
    path: domain + 'proverbs.addView'
  },
  addLike: {
    method: 'POST',
    path: domain + 'proverbs.addLike'
  },
  removeLike: {
    method: 'POST',
    path: domain + 'proverbs.removeLike'
  },
  toggleLike: {
    method: 'POST',
    path: domain + 'proverbs.toggleLike'
  },
  addFave: {
    method: 'POST',
    path: domain + 'proverbs.addFave'
  },
  removeFave: {
    method: 'POST',
    path: domain + 'proverbs.removeFave'
  },
};