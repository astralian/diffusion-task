import './RecipeTitle.scss'
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../store/context';
import RecipeTitleLoader from './RecipeTitleLoader';
import Socials from '../Socials';

export const RecipeTitle = () => {
  const { state } = useContext(AppContext);
  const { data } = state.recipe;

  const [icon, setIcon] = useState('');


  useEffect(() => {
    (async () => {
      const importedIcon = await import(`./../../../assets/images/flags/${data ? data.country : 'usa'}.svg`);
      setIcon(importedIcon.default);
    })()
  }, [data]);

  return (
    <div className="title-container">
    {!data ? <RecipeTitleLoader /> :
      <>
        <div className="title-value">
          <img src={icon} width={24} height={24}  alt="" />
          <span className="title-text">{data.name}</span>
        </div>

        <Socials />
      </>
    }
    </div>
  )
}
