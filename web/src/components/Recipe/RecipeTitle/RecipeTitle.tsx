import './RecipeTitle.scss'
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../store/context';
import RecipeTitleLoader from './RecipeTitleLoader';
import Socials from '../Socials';
import { Link } from 'react-router-dom';

export const RecipeTitle = () => {
  const { state } = useContext(AppContext);
  const { data } = state.recipe;

  const [icon, setIcon] = useState('');

  useEffect(() => {
    (async () => {
      const flag = await import(`./../../../assets/images/flags/${data ? data.origin.toLowerCase() : 'thai'}.svg`);
      setIcon(flag.default);
    })()
  }, [data]);

  return (
    <div className="title-container">
    {!data ? <RecipeTitleLoader /> :
      <>
        <div className="title-value">
          <img src={icon} width={24} height={24}  alt="" />
          <span className="title-text">{`${data.origin} ${data.name}`}</span>
        </div>

        <div className="title-sidebar">
          <Socials />
          <Link to="add-recipe" className="add-recipe">+ Add Recipe</Link>
        </div>
      </>
    }
    </div>
  )
}
