import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import { createBrowserHistory } from 'history';
import GlobalStyles from './styles/GlobalStyles';
import './styles/App.css';
import ErrorBoundary from './components/errors/ErrorBoundary';
import Home from './pages/home/Home';
import { DesignsProvider } from './context/DesignsContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// REACT QUERY INTEGRATION
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});
const history = createBrowserHistory();

function App() {
  // Load all webpages on top automatically
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <DesignsProvider>
          <GlobalStyles />
          {/* Ensure that the Router component is properly initialized */}
          <Router history={history}>
            {/* Wrap your routes in the Routes component */}
            <Routes>
              {/* Define your routes here */}
              <Route path="/" element={<Home />} />
              {/* Add more routes here as needed */}
              {/* Example: <Route path="/about" element={<About />} /> */}
              {/* Add a catch-all route for 404 */}
              {/* You can render a Not Found component or handle the 404 error as needed */}
            </Routes>
          </Router>
        </DesignsProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
