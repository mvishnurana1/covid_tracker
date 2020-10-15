import React, { Component } from 'react'; 
import './Form.css';
import {Button, Form} from 'react-bootstrap'; 
import CountryData from '../View/CountryData'; 
import CovidApi from '../../Api/CovidApi';

class Forms extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      country: null
    }; 
  }

  handleChange(event) {
    this.setState({ country: event.target.value }); 
  }

  handleSubmit(event) {
    event.preventDefault(); 
    console.log(this.state.country); 
    return <CovidApi country={this.state.country} />
  }

  returnCountryInformation() {
    const { country } = this.state;

    if (!country) {
      return; 
    }
    
     return <CovidApi country={country} />
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
          type="string"
          onChange={(e) => this.handleChange(e)}
          country={this.state.country}
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
    <CovidApi />
    </>
  )}
}

export default Forms; 
