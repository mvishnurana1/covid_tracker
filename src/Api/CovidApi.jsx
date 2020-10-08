import React, { Component } from 'react'; 
import axios from 'axios'; 

class CovidApi extends Component {
  constructor() {
    super(); 
    this.state = {
      data: null
    }; 
  }

  async componentDidMount() {
    const res = await axios.get(`https://api.covid19api.com/dayone/country/india/status/confirmed/live`)

    console.log(res.data); 
    this.setState({ data: res.data }); 
  }

  getLatestData() {
    const { data } = this.state; 

    if (!data) {
      return; 
    }
    
    console.log(data[data.length - 1]); 
    return data[data.length - 1]; 
  }

  renderLatestData() {
    const latestData = this.getLatestData(); 
    if (!latestData) {
      return; 
    }

    // console.log(latestData);

    // Object.keys(latestData).map((keyName, index, value) => (
    //   console.log(index, keyName, value)
    // ))

    // atestData.map((value) => console.log(value))

    // return latestData.map((data) => <div>
    //   {data}
    // </div>)
  }

  render() {
    return (<div>
      {this.renderLatestData()}
    </div>)
  }
}

export default CovidApi; 
