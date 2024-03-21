import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by error boundary', error, errorInfo);
    this.setState({ hasError: true });

    // If error then automatic page refresh
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI when an error occurs
      return <div>Oops! Something went wrong. Please refresh the page.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
