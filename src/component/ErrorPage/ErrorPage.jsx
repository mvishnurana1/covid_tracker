import React from 'react';

import './ErrorPage.css'; 

const ErrorPage = ({ country, error }) => {
    return (<div className="pageLayout">
        <h2>Encountered Error: {error.status}</h2> 
        <h2>While looking for Country: {country}</h2>
    </div>); 
}

export default ErrorPage; 
