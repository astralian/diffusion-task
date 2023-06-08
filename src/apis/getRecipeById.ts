import { IResponse } from '../types';
import IRecipe from '../types/IRecipe';
import { spanishPaellaResponse } from '../fixtures/spanishPaellaRespose';
import { ukrainianBorschResponse } from '../fixtures/ukrainianBorschRespose';
import { americanBurgerResponse } from '../fixtures/americanBurgerResponse'

const getSearchResults = async (id: number): Promise<IResponse<IRecipe>> => {
  return new Promise(resolve => {
    setTimeout(() => {

      switch (id) {
        case 1:
          resolve({
            status: 200,
            data: spanishPaellaResponse
          });

          break;
        case 2:
          resolve({
            status: 200,
            data: ukrainianBorschResponse
          });

          break;
        case 3:
          resolve({
            status: 200,
            data: americanBurgerResponse
          });

          break;
      }
    }, 1500);
  });
}

export default getSearchResults
