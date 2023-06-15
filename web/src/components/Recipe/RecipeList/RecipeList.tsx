import './RecipeList.scss'
import { useContext } from 'react';
import { AppContext } from '../../../store/context';
import RecipeListLoader from './RecipeListLoader';

export const RecipeList = () => {
  const { state } = useContext(AppContext);
  const { data } = state.recipe;

  return (
    <div className="recipe-container">
      { !data ?
          <RecipeListLoader />
         :
        <>
          <div className="recipe-item">
            <div className="recipe-item-name">Protein</div>
            <div  className="recipe-item-values">{data.protein}</div>
          </div>
          <div className="recipe-item">
            <div className="recipe-item-name">Produce</div>
            <div  className="recipe-item-values recipe-item-values_green">{data.produce}</div>
          </div>
          <div className="recipe-item">
            <div className="recipe-item-name">Spices</div>
            <div  className="recipe-item-values recipe-item-values_red">{data.spice}</div>
          </div>
          <div className="recipe-item">
            <div className="recipe-item-name">Cooking Oil</div>
            <div  className="recipe-item-values recipe-item-values_orange">{data.cookingOil}</div>
          </div>
          <div className="recipe-item">
            <div className="recipe-item-name">Volume</div>
            <div  className="recipe-item-values">{data.volume}g</div>
          </div>
          <div className="recipe-item">
            <div className="recipe-item-name">Serves</div>
            <div  className="recipe-item-values">{data.serves}</div>
          </div>
          <div className="recipe-item">
            <div className="recipe-item-name">Authenticity</div>
            <div  className="recipe-item-values recipe-item-values_orange">{data.authenticity}</div>
          </div>
          <div className="recipe-item">
            <div className="recipe-item-name">Stock</div>
            <div  className="recipe-item-values recipe-item-values_orange">{data.stock}</div>
          </div>
        </>
      }
    </div>
  )
}
