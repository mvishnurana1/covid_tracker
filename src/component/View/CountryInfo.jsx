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

  return <Card style={{ backgroundColor: 'pink', width: '500px'}}>
    <img alt="" className='imageStyle' src={CovidLogo} />
    <div>
      {data[data.length - 1].Country}
      <Image 
        src={`https://www.countryflags.io/${data[data.length - 1].CountryCode}/shiny/64.png`}
        fluid
      />
    </div>
    <div>
      {(data[data.length - 1].Cases).toLocaleString()}
    </div>
    <div>
      {moment(data[data.length - 1].Date).format('LLLL')}
    </div>
  </Card>
}

export default CountryInfo; 
