import React from 'react';

const ErrorPage = ({ country, error }) => {
    return (<div style={{ width: '25rem'}}>
        <h2>Encountered Error: {error.status}</h2> 
        <h2>While looking for Country: {country}</h2>
    </div>); 
}

export default ErrorPage; 
