import React from 'react';

import { Card, ListGroup } from 'react-bootstrap';

import './ErrorPage.css'; 

const ErrorPage = ({ country, error }) => {
    return (<Card className="pageLayout">
    <ListGroup.Item>
    <div className="listGroupInfo">
        <div className="listGroupLabel">
        Error Code:
        </div>
        <div className="countryInfoContainer">
        {error.status}
        </div>
    </div>
    </ListGroup.Item>
    <ListGroup.Item>
    <div className="listGroupInfo">
        <div className="listGroupLabel">
        Country:
        </div>
        <div className="countryInfoContainer">
        {country}
        </div>
    </div>
    </ListGroup.Item>
    </Card>); 
}

export default ErrorPage; 
