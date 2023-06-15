import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import './styles/reset.scss'
import './styles/app.scss'

import { AppProvider } from './store/context';
import { AddRecipe, RecipePage } from './Pages';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <RecipePage />,
  },
  {
    path: 'add-recipe',
    element: <AddRecipe />
  }
]);

function App() {
  return (
    <div className="app">
      <AppProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AppProvider>
    </div>
  );
}

export default App;
