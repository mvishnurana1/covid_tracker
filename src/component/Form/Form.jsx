import axios from 'axios'; 
import React, { Component } from 'react'; 
import { Button, Form } from 'react-bootstrap'; 

import './Form.css';

import CountryInfo from '../CountryInfo/CountryInfo'; 
import ErrorPage from '../ErrorPage/ErrorPage'; 

class Forms extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      country: null, 
      data: null,
      error: null, 
    }; 
  }

  handleChange(event) {
    let country = event.target.value; 
    country = country.replace(' ', '-'); 
    country = country.trim();
    this.setState({ country: country }); 
  }

  async handleSubmit(event) {
    event.preventDefault(); 

    const { country } = this.state; 

    try {
      const res = await axios.get(`https://api.covid19api.com/dayone/country/${country}/status/confirmed/live`); 
      this.setState({ data: res.data }); 
    } catch(e) {
      console.error('This is the error bro...', e.response); 
      this.setState({ error: e.response }); 
    }
  }

  renderCountryInformation() {
    const { country, data, error } = this.state; 

    if (!data) {
      return; 
    }

    if (!error) {
      return <CountryInfo data={data} /> 
    } else {
      return <ErrorPage country={country} error={error} />
    }
  }  

  render() {
    return (
    <div className="page">
      <Form className="formContainer" onSubmit={(e) => this.handleSubmit(e)}> 
        <Form.Group className='formAlignment'> 
          <Form.Control 
            size="lg" 
            placeholder="Enter Country"
            onChange={(e) => this.handleChange(e)}
            country={this.state.country}
            value={this.state.country}
          />
          <Button     
            className="submit"
            value="country"
            type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
      {this.renderCountryInformation()}
    </div>
  )}
}

export default Forms; 
