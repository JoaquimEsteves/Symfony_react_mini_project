import React from 'react';

export type ErrorState = {
    hasError:boolean
}

class ErrorBoundary extends React.Component<{}, ErrorState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error: any, info: any) {
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <h1>Whoops yo</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary