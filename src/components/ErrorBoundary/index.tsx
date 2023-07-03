import { Component, ErrorInfo } from 'react';

import './styles.css'
import {ErrorBoundaryProps,ErrorBoundaryState } from './types'

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            hasError: true,
            error: error,
            errorInfo: errorInfo
        });
    }

    render(error = this.state.error) {
        if (this.state.hasError) {
            return (
                <div className='error-container'>
                    <h1>Opss,Something went wrong.</h1>
                    <h2> Try again later)))</h2>
                    <p>Error: {error && error.toString()}</p>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
