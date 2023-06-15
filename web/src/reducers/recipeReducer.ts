import { Types } from '../types/types';
import { IRecipe, IRecipeState } from '../types';
import { ActionMap } from '../types';

type RecipePayload = {
  [Types.Start_Recipe_Fetch]: undefined;
  [Types.Update_Recipe_Successful]: IRecipe;
}

export type RecipeActions = ActionMap<RecipePayload>[keyof ActionMap<RecipePayload>];

const recipeReducer = (state: IRecipeState, action: RecipeActions) => {
  switch (action.type) {

    case Types.Start_Recipe_Fetch:
      return {
        ...state,
        data: null
      }
    case Types.Update_Recipe_Successful:
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state;
  }
};

export default recipeReducer;
