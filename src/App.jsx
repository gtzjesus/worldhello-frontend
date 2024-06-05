import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import './styles/App.css';
import ErrorBoundary from './components/errors/ErrorBoundary';
import Home from './pages/home/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NotFound from './components/errors/NotFound';

// REACT QUERY INTEGRATION
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  // Load all webpages on top automatically
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add a route for NotFound component */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
