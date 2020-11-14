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

  return <Card style={{ backgroundColor: 'pink', width: '20rem'}}>
    <ListGroup variant="flush">
    <ListGroup.Item>
      <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-evenly' }}>
        <div style={{ fontWeight: '600', textAlign: 'right', width: '8rem'}}>
          Country: 
        </div>
        <div style={{ alignItems: 'center', display: 'flex', marginLeft: '1rem', width: '9rem' }}>
          {latestUpdate.Country}
          <Image 
            src={`https://www.countryflags.io/${latestUpdate.CountryCode}/shiny/64.png`}
            fluid
          />
        </div>
      </div>
    </ListGroup.Item>
    <ListGroup.Item>
      <div style={{ alignItems: 'center', display: 'flex', height: '64px', justifyContent: 'space-evenly' }}>
        <div style={{ fontWeight: '600', textAlign: 'right', width: '8rem'}}>
        Cases to Date: 
        </div>
        <div style={{ alignItems: 'center', display: 'flex', marginLeft: '1rem', width: '9rem' }}>
          {(latestUpdate.Cases).toLocaleString()}
        </div>
      </div>
    </ListGroup.Item>
    <ListGroup.Item>
    <div style={{ alignItems: 'center', display: 'flex', height: '64px',  justifyContent: 'space-evenly' }}>
        <div style={{ fontWeight: '600', textAlign: 'right', width: '8rem'}}>
          Updated On: 
        </div>
        <div style={{ alignItems: 'center', display: 'flex', marginLeft: '1rem', width: '9rem' }}>
          {moment(latestUpdate.Date).format('LL')}
        </div>
      </div>
    </ListGroup.Item>
  </ListGroup>
  </Card>
}

export default CountryInfo; 
