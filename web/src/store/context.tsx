import React, { createContext, useReducer, PropsWithChildren } from 'react';
import { IInitialState } from '../types';
import mainReducer from '../reducers/mainReducer';
import { RecipeActions } from '../reducers/recipeReducer';


const initialState = {
  recipe: {
    isLoading: false,
    data: null
  }
}

const AppContext = createContext<{
  state: IInitialState;
  dispatch: React.Dispatch<RecipeActions>;
}>({
  state: initialState,
  dispatch: () => null
});

const AppProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider };
