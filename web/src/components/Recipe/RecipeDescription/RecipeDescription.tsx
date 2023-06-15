import './RecipeDescription.scss'
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../store/context';
import RecipeDescriptionLoader from './RecipeDescriptionLoader';
import { getDifficultyLabel } from '../../../utils';

export const RecipeDescription = () => {
  const { state } = useContext(AppContext);
  const { data } = state.recipe;

  const [icon, setIcon] = useState('');

  useEffect(() => {
    (async () => {
      const fileName = data ? `${data.origin.toLowerCase()}_${data.name.toLowerCase()}`: 'thai_curry';

      try {
        const icon = await import(`./../../../assets/images/dishes/${fileName}.svg`)
        setIcon(icon.default);
      } catch (err) {
        const icon = await import(`./../../../assets/images/dishes/thai_curry.svg`)
        setIcon(icon.default);
      }

    })();
  }, [data]);

  return (
    <div className={`description-container description-container_${getDifficultyLabel(data?.difficulty).toLowerCase()}`}>
      <div className="description-info">
        {!data ?
          <RecipeDescriptionLoader /> :
        <>
          <div className="description-title">
            <img
              height={30}
              width={30}
              src={icon}
              alt={data.name} />
            <span className="description-title-value">Difficulty: {getDifficultyLabel(data.difficulty)}</span>
          </div>
          <div className="description-text">
            {data.description.substring(0, 185)}{data.description.length >= 185 && '...'}
          </div>
          <a
            href={`https://www.google.com/search?q=${data.name}`}
            className="description-button"
            rel="noreferrer"
            target="_blank"
          >
            View Full Recipe
          </a>
        </>
        }
      </div>
    </div>
  )
}
