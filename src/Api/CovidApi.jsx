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
    const res = await axios.get(`https://api.covid19api.com/dayone/country/south-korea/status/confirmed/live`)

    console.log(res.data); 
    this.setState({ data: res.data }); 
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
      {this.getLatesCountrytData()}
    </div>)
  }
}

export default CovidApi; 
