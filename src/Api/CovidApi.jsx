import axios from 'axios'; 
import React, { Component } from 'react'; 
import CountryData from '../component/View/CountryData'; 

class CovidApi extends Component {
  constructor() {
    super(); 
    this.state = {
      data: null
    }; 
  }

  async componentDidMount() {
    const { country } = this.props; 

    console.log('in get Data...'); 

    if (!country) {
      console.log('no country data... yet'); 
      return; 
    }

    // https://api.covid19api.com/dayone/country/india/status/confirmed/live

    try {
      const res = await axios.get(`https://api.covid19api.com/dayone/country/${country}/status/confirmed/live`); 
      console.log(res.data); 
      this.setState({ data: res.data }); 
    } catch(e) {
      console.warn(e); 
    }
  }

  getLatesCountrytData() {
    const { data } = this.state; 

    if (!data) {
      return; 
    }

    const final = data[data.length - 1]; 

    return <CountryData countryInfo={final} />
  }

  render() {

  return (<div>
    </div>)
  }
}

export default CovidApi; 
