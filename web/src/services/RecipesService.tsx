import { IRecipe } from '../types';
import Api from '../core/ApiClient';

const addRecipe = async (data: IRecipe): Promise<IRecipe> => {
  const response = await Api.post<IRecipe>('', data);
  return response.data;
}

const getRandom = async (): Promise<IRecipe> => {
  const response = await Api.get<IRecipe>('/random');
  return response.data;
}

const search = async (query: string | undefined): Promise<IRecipe[]> => {
  const response = await Api.get<IRecipe[]>(`/search?query=${query}`);
  return response.data;
}

export const RecipesService = {
  addRecipe,
  getRandom,
  search
}
