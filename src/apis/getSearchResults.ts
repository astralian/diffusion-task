import { IResponse, ISearchResults } from '../types';

const getSearchResults = async (): Promise<IResponse<ISearchResults[]>> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        status: 200,
        data: [{
          id: 2,
          name: 'Ukrainian Borsch',
          country: 'ua'
        }, {
          id: 3,
          name: 'American Burger',
          country: 'usa'
        }, {
          id: 1,
          name: 'Spanish Paella',
          country: 'es'
        }]
      });
    }, 1500);
  });
}

export default getSearchResults
