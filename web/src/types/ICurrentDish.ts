import IRecipe from './IRecipe';

export default interface ICurrentDish {
  id: number;
  country: string;
  imageUrl: string;
  difficulty: string;
  description: string;
  recipe: IRecipe[];
}
