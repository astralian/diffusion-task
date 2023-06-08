import { IResponse } from '../types';
import IRecipe from '../types/IRecipe';
import { spanishPaellaResponse } from '../fixtures/spanishPaellaRespose';

const getSearchResults = async (): Promise<IResponse<IRecipe>> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        status: 200,
        data: spanishPaellaResponse
      });
    }, 1500);
  });
}

export default getSearchResults
