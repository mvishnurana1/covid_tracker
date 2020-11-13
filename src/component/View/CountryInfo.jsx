import moment from 'moment'; 
import React from 'react'; 
import { Card, Image } from 'react-bootstrap'; 

import './CountryInfo.css'; 

import CovidLogo from '../../assets/virus.svg'; 

const CountryInfo = ({ data }) => {
  if (!data) {
    console.log('No data dound...'); 
    return; 
  }

  const latestUpdate = data[data.length - 1]; 

  return <Card style={{ backgroundColor: 'pink', width: '500px'}}>
    <img alt="" className='imageStyle' src={CovidLogo} />
    <div>
      {latestUpdate.Country}
      <Image 
        src={`https://www.countryflags.io/${latestUpdate.CountryCode}/shiny/64.png`}
        fluid
      />
    </div>
    <div>
      {(latestUpdate.Cases).toLocaleString()}
    </div>
    <div>
      {moment(latestUpdate.Date).format('LLLL')}
    </div>
  </Card>
}

export default CountryInfo; 
