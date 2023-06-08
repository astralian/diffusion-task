import RecipeTitle from './RecipeTitle';
import RecipeList from './RecipeList';
import RecipeDescription from './RecipeDescription';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../store/context';
import getRandomRecipe from '../../apis/getRandomRecipe';
import { Types } from '../../types/types';
import './Recipe.scss'

export const Recipe = () => {
  const [isError, setError] = useState<boolean>(false)
  useEffect(()=> console.log("render") )

  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    const getInitialRecipe = async () => {
      const res = await getRandomRecipe();

      const { status, data } = res;

      if (status === 200) {
        dispatch({
          type: Types.Update_Recipe_Successful,
          payload: data
        })
      }

      if (status === 500) {
        setError(true)
      }
    };

    getInitialRecipe(); // run it, run it

    return () => {};
  }, [dispatch]);


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
