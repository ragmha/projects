import React from 'react';
import ErrorBoundary from 'react-error-boundary';

const errorHandler = (error: Error, componentStack: string) => {
    // Do something with the error
    // E.g. log to an error logging client here
    console.log({ error, componentStack })
};


const Error: React.FC = ({ children }) => <ErrorBoundary onError={errorHandler}>
    {children}
</ErrorBoundary>

export default Error;
export { Error }