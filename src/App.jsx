import Home from './pages/home/Home';
import GlobalStyles from './styles/GlobalStyles';
import './styles/App.css';
import { useEffect } from 'react';
import { DesignsProvider } from './context/DesignsContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ErrorBoundary from './components/errors/ErrorBoundary';

// REACT QUERY INTEGRATION
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

// CREATE ROUTER FROM REACT ROUTER DOM (PAGES)
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

function App() {
  // LOAD ALL WEBPAGES ON TOP AUTO
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <DesignsProvider>
          <RouterProvider router={router} />
        </DesignsProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
