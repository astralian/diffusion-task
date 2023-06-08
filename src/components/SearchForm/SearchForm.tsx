import React, { ChangeEvent, useContext, useRef, useState } from 'react';

import './SearchFrom.scss'
import { getSearchResults } from '../../apis';
import { IRecipe, IResponse, ISearchResults } from '../../types';
import classNames from 'classnames';
import { AppContext } from '../../store/context';
import { Types } from '../../types/types';
import getRecipeById from '../../apis/getRecipeById';

export const SearchForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { dispatch } = useContext(AppContext);

  const [searchResults, setSearchResults] = useState<ISearchResults[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false)
  const [isError, setError] = useState<boolean>(false)

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    if (value.length >= 3) {
      setLoading(true);

      const res: IResponse<ISearchResults[]> = await getSearchResults();
      const { status, data } = res;

      if (status === 200) {
        setSearchResults(data);
      }

      if (status === 500) {
        setError(true);
      }

      setLoading(false);
    }
  }

  const handleBlur = () => {
    setTimeout(() => {
      setSearchResults(null);
    }, 50)
  }

  const handleRecipeClick = async (id: number) => {
    setSearchResults(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }

    dispatch({ type: Types.Start_Recipe_Fetch})

    const res: IResponse<IRecipe> = await getRecipeById(id);
    const { status, data } = res;

    console.log(data);

    if (status === 200) {
      dispatch({
        type: Types.Update_Recipe_Successful,
        payload: data
      })
    }
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
        ref={inputRef}
        onBlur={handleBlur}
        onChange={(e) => handleChange(e)}
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
          {searchResults.map((item) => {
            return (
              <span
                key={item.name}
                onClick={() => handleRecipeClick(item.id)}
                className="search-form-result-item"
              >
                {item.name}
              </span>
            )
          })}
        </div>
      }
    </div>
  )
}
