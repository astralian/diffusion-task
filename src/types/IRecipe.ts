import IRecipeItem from './IRecipeItem';

export default interface IRecipe {
  id: number;
  name: string;
  difficulty: string;
  description: string;
  country: string;
  items: IRecipeItem[]
}
