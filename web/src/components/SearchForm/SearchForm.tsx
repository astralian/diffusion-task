import React, { useContext, useState } from 'react';

import './SearchFrom.scss'
import { IRecipe } from '../../types';
import classNames from 'classnames';
import { AppContext } from '../../store/context';
import { useQuery } from 'react-query';
import { RecipesService } from '../../services';
import { useDebounce } from 'usehooks-ts';
import { SearchFormResultItem } from './SearchFormResultItem';
import { Types } from '../../types/types';

export const SearchForm = () => {
  const { dispatch } = useContext(AppContext);

  const [searchQuery, setSearchQuery] = useState<string>('')
  const [searchResults, setSearchResults] = useState<IRecipe[] | null>(null);
  const [isError, setError] = useState<boolean>(false)

  const debouncedFilter = useDebounce(searchQuery, 500);

  const { isLoading } = useQuery(
      ['query-search', debouncedFilter],
      () => RecipesService.search(debouncedFilter),
      {
        enabled: Boolean(debouncedFilter),
        onSuccess: (data) => {
          setSearchResults(data)
        },
        onError: () => setError(true)
      }
    )

  const handleBlur = () => {
    setTimeout(() => {
      setSearchResults(null);
    }, 50)
  }

  const handleClick = (item: IRecipe) => {
    setSearchResults(null);
    setSearchQuery('');

    dispatch({
      type: Types.Update_Recipe_Successful,
      payload: item
    })
  }

  return (
    <div
      className={classNames({
        'search-form': true,
        'search-form_loading': isLoading
      })}
    >
      <input
        type="text"
        onBlur={handleBlur}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={classNames({
          'search-form-input': true,
          'search-form-input_with-results': !!searchResults,
          'search-form-input_error': isError
        })}
        placeholder="Search cousine"
      />

      {isError && <div className="search-form-error">Sorry something went wrong... Try again later</div>}

      {searchResults &&
        <div className="search-form-result">
          {searchResults.map((item) =>
            <SearchFormResultItem
              key={item.id}
              item={item}
              handleClick={(item) => handleClick(item)}
            />
          )}
        </div>
      }
    </div>
  )
}
