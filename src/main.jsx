import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', color: '#ff5555', background: '#1a1a1a', minHeight: '100vh', fontFamily: 'monospace' }}>
          <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Something went wrong.</h1>
          <div style={{ background: '#000', padding: '20px', borderRadius: '8px', overflow: 'auto' }}>
            <h2 style={{ fontSize: '18px', marginBottom: '10px', color: '#fff' }}>Error:</h2>
            <pre style={{ color: '#ff5555' }}>{this.state.error && this.state.error.toString()}</pre>
            <h2 style={{ fontSize: '18px', margin: '20px 0 10px', color: '#fff' }}>Component Stack:</h2>
            <pre style={{ color: '#aaa' }}>{this.state.errorInfo && this.state.errorInfo.componentStack}</pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
