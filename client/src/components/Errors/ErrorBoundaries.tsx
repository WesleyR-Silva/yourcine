import React from "react";

class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    }
  
    static getDerivedStateFromError(error: any) {
      return { hasError: true };
    }
  
    render() {
      if (this.state.hasError) {
        // Você pode renderizar qualquer UI alternativa
        return <h1>Sua busca não foi encontrada.</h1>;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;