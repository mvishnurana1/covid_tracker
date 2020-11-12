import axios from 'axios'; 
import React, { Component } from 'react'; 
import {Button, Form} from 'react-bootstrap'; 

import './Form.css';

import CountryInfo from '../View/CountryInfo'; 

class Forms extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      country: null, 
      data: null,
      latestData: null, 
    }; 
  }

  handleChange(event) {
    this.setState({ country: event.target.value }); 
  }

  async handleSubmit(event) {
    event.preventDefault(); 

    const { country } = this.state; 

    try {
      const res = await axios.get(`https://api.covid19api.com/dayone/country/${country}/status/confirmed/live`); 
      console.log(res.data); 
      this.setState({ data: res.data }); 
    } catch(e) {
      console.error(e); 
    }
  }

  // get the data object and see the values in it 
  getLatestData(){
    const { data } = this.state;
    
    if(!data) {
      return; 
    }

    const latestData = data.length - 1; 
    this.setState({ latestData: data[latestData] }); 
  }

  renderCountryInformation() {
    const { latestData } = this.state; 

    if (!latestData) {
      return; 
    }

    return <CountryInfo data={latestData} />
  }

  returnCountryInformation() {
    const { country } = this.state;

    if (!country) {
      return; 
    }
  }

  render() {
    return (
    <>
    <Form className="formContainer" onSubmit={(e) => this.handleSubmit(e)}> 
      <Form.Group className='formAlignment'> 
        <Form.Control 
          size="lg" 
          style={{ marginRight: '2rem' }}
          placeholder="Enter Country"
          onChange={(e) => this.handleChange(e)}
          country={this.state.country}
          value={this.state.country}
        />
        <Button 
          variant="primary"  
          value="country"
          type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>

    {this.returnCountryInformation()}
    {this.getLatestData()}
    {this.renderCountryInformation()}
    </>
  )}
}

export default Forms; 
