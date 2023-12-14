import React, { Component } from 'react'
class ErrorBoundary extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null, 
    } 
  }

  componentDidCatch(error, errorInfo) { 
    this.setState({ 
      hasError: true, 
      error: error, 
      errorInfo: errorInfo, 
    })
  }

  render() { 
    if (this.state.hasError) { 
      return ( 
        <div> 
          <h1>ErrorBoundary: Something went wrong.</h1> 
          <details> 
            {this.state.error && this.state.error.toString()} 
            <br /> 
            {this.state.errorInfo.componentStack} 
          </details> 
        </div> 
      ); 
    } 
    return this.props.children 
  } 
}

export default ErrorBoundary