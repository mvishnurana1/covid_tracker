import moment from 'moment'; 
import React from 'react'; 
import { Card, Image, ListGroup } from 'react-bootstrap'; 

import './CountryInfo.css'; 

const CountryInfo = ({ data }) => {
  if (!data) {
    console.log('No data dound...'); 
    return; 
  }

  const latestUpdate = data[data.length - 1]; 

  return <Card className="card">
    <ListGroup variant="flush">
    <ListGroup.Item>
      <div className="listGroupItem">
        <div className="listGroupLabel">
          Country: 
        </div>
        <div className="countryInfoContainer">
          {latestUpdate.Country}
          <Image 
            src={`https://www.countryflags.io/${latestUpdate.CountryCode}/shiny/64.png`}
            fluid
          />
        </div>
      </div>
    </ListGroup.Item>
    <ListGroup.Item>
      <div className="listGroupInfo">
        <div className="listGroupLabel">
          Cases to Date: 
        </div>
        <div className="countryInfoContainer">
          {(latestUpdate.Cases).toLocaleString()}
        </div>
      </div>
    </ListGroup.Item>
    <ListGroup.Item>
    <div className="listGroupInfo">
        <div className="listGroupLabel">
          Updated On: 
        </div>
        <div className="countryInfoContainer">
          {moment(latestUpdate.Date).format('LL')}
        </div>
      </div>
    </ListGroup.Item>
  </ListGroup>
  </Card>
}

export default CountryInfo; 
