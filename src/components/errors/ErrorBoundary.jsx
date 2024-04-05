import { Component } from 'react';
import styled from 'styled-components';

const StyledNotFound = styled.div`
  display: flex;
  justify-content: center;
  padding: var(--padding-medium);
`;
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by error boundary', error, errorInfo);
    this.setState({ hasError: true, error: error, errorInfo: errorInfo });

    // If error then automatic page refresh
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI when an error occurs
      return (
        <div>
          <h1>Oops! Something went wrong.</h1>
          <p>Error: {this.state.error.toString()}</p>
          <p>Component Stack Trace: {this.state.errorInfo.componentStack}</p>
          <p>Please refresh the page.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
