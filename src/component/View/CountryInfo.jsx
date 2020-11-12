import moment from 'moment'; 
import React from 'react'; 

import './CountryInfo.css'; 

import CovidLogo from '../../assets/virus.svg'; 

const CountryData = ({ countryInfo }) => {
  if (!countryInfo) {
    return <div>
      No Data available...
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
