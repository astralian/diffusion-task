import './RecipeList.scss'
import { useContext } from 'react';
import { AppContext } from '../../../store/context';
import IRecipeItem from './../../../types/IRecipeItem';
import RecipeListLoader from './RecipeListLoader';

export const RecipeList = () => {
  const { state } = useContext(AppContext);
  const { data, } = state.recipe;

  return (
    <div className="recipe-container">
      { !data ?
          <RecipeListLoader />
         :
        <>
          {data.items.map(({ name, values }: IRecipeItem) => {
            return (
              <div key={name} className="recipe-item">
                <div className="recipe-item-name">{name}</div>
                <div  className="recipe-item-values">
                  {values.map(({ name, type }, key, { length }) => {
                    return (
                      <span key={name}>
                        <span className={`recipe-item-value recipe-item-value_${type}`}>{name}</span>
                        {values.length > 1 && key + 1 !== length ? ' / ': ''}
                      </span>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </>
      }
    </div>
  )
}
