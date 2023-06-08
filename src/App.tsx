import React from 'react';
import './styles/reset.scss'
import './styles/app.scss'

import SearchForm from './components/SearchForm';
import Recipe from './components/Recipe';
import { AppProvider } from './store/context';

function App() {
  return (
    <div className="app">
      <AppProvider>
        <SearchForm />
        <Recipe />
      </AppProvider>
    </div>
  );
}

export default App;
