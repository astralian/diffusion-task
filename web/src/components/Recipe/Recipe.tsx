import RecipeTitle from './RecipeTitle';
import RecipeList from './RecipeList';
import RecipeDescription from './RecipeDescription';
import { useContext, useState } from 'react';
import { AppContext } from '../../store/context';
import './Recipe.scss'
import { useQuery } from 'react-query';
import { IRecipe } from '../../types';
import { RecipesService } from '../../services';
import { Types } from '../../types/types';

export const Recipe = () => {
  const [isError, setError] = useState<boolean>(false)

  const { dispatch } = useContext(AppContext);

  useQuery<IRecipe, Error>(
    'query-random-recipe',
    async () => await RecipesService.getRandom(),
    {
      enabled: true,
      onSuccess: (data) => {
        dispatch({
          type: Types.Update_Recipe_Successful,
          payload: data
        })
      },
      onError: () => setError(true),
    }
  );

  return (
    <>
      {! isError ?
        <>
          <RecipeTitle />
          <RecipeDescription />
          <RecipeList />
        </> :
        <div className="recipe-error">Something went wrong. Try again reload app!</div>
      }
    </>
  )
}
