import recipeReducer, { RecipeActions } from './recipeReducer';
import { IInitialState } from '../types';

const mainReducer = ({ recipe }: IInitialState, action: RecipeActions) => ({
  recipe: recipeReducer(recipe, action)
});

export default mainReducer
