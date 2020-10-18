import moment from 'moment'; 
import React from 'react'; 
import Spinner from 'react-bootstrap/Spinner'; 

import './CountryInfo.css'; 

import CovidLogo from '../../assets/virus.svg'; 

const CountryData = ({ countryInfo }) => {
  if (!countryInfo) {
    console.log('no data, returning ');
    return <div>
      <Spinner />
    </div> 
  }

  return <div style={{ backgroundColor: 'pink'}}>
    <img alt="" className='imageStyle' src={CovidLogo} />
    <div>
      {countryInfo.CountryCode}
    </div>
    <div>
      {countryInfo.Country}
    </div>
    <div>
      {countryInfo.Cases}
    </div>
    <div>
      {moment(countryInfo.Date).format('DD/MM/YYYY')}
    </div>
  </div>
}

export default CountryData; 
