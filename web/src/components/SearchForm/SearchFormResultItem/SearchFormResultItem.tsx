import './SearchFormResultItem.scss'
import { getDifficultyLabel } from '../../../utils';
import React, { useEffect, useState } from 'react';
import { IRecipe } from '../../../types';

export const SearchFormResultItem = ({item, handleClick}: {item: IRecipe, handleClick: (item: IRecipe) => void}) => {
  const [icon, setIcon] = useState('');

  useEffect(() => {
    (async () => {
      const flag = await import(`./../../../assets/images/flags/${item ? item?.origin?.toLowerCase() : 'thai'}.svg`);
      setIcon(flag.default);
    })()
  }, [item]);

  return (
    <div key={item?.id} className="search-form-result-item" onClick={() => handleClick(item)}>
      <div className="search-form-result-item-name">
        <img height={24} width={36} src={icon} alt={item.origin} />
        {`${item?.origin} ${item?.name}`}
      </div>
      <div
        className={`search-form-result-item-difficulty search-form-result-item-difficulty_${getDifficultyLabel(item?.difficulty).toLowerCase()}`}
      >
        {getDifficultyLabel(item?.difficulty)}
      </div>
    </div>
  );
}
