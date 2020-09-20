import React from 'react';
import SearchShow  from './SearchShow.js';
import flight from './flights.json';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    
    const source_city_map =flight.map(t=>t.source);  
    //console.log(source_city_map);
    const source_city=['Enter Origin City...',...new Set(source_city_map)];
    const destination_city_map =flight.map(t=>t.destination); 
    const destination_city=['Enter Destination City...',...new Set(destination_city_map)];
    //console.log("set",source_city);
    const startDate =new Date();
    this.state = {
      value: 'Enter Origin City...',
      source_city:source_city,
      destination_city:destination_city,
      startDate:startDate
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
  }

  handleChange(event) {
    console.log('handle change: ' + event.target.name  );
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  handleChangeDate(date) {
    console.log('handle date: '+ date);
    //let nam = "departure_date";
    //let val = event.target.value;
    //this.setState({[nam]: date});
  }

  handleSubmit(event) {
    var flag=true;
    //if(event.type==='click')
    
    this.setState({ShowResultFlag: flag});
    event.preventDefault();
  }


  handleSelect = (event) => {
    
  }


  render(){   
    const mystyle = {
      padding: "20px",
      fontFamily: "Arial"
    };
    return (
      <div>
        <table  border={1} cellSpacing={0} cellPadding={0} width={700}  height={500} >
          <tbody>
              <tr>
                <td colSpan={2}> 
                <div style={mystyle}><header><h1>Flight Search Engine</h1></header></div></td></tr>
                <tr><td>
                <div style={mystyle}>
                <input type="text"  name='org_city' onChange={this.handleChange} placeholder="Enter Origin City..."/></div>
                <div style={mystyle}>
                <input type="text" name='depart_city' onChange={this.handleChange} placeholder="Enter Destination City..."/></div>
                  
                  
                  {/* remove comment to see the select box for soure  and destination select box
                <select name='org_city' onChange={this.handleChange} margin-top={20}> 
                    {this.state.source_city.map((item) =>
                      <option key={item}>{item}</option>
                  )}
                </select>
                </div>
                <div style={mystyle}>
                <select name='depart_city' onChange={this.handleChange} margin-top={20}> 
                {this.state.destination_city.map((item) =>
                  <option key={item}>{item}</option>
                )}
                </select>*/}
              <div style={mystyle}>
              <DatePicker
              name="departure_date"
              placeholder="Departure Date"
              selected={this.state.startDate}
              onSelect={this.handleSelect}
              onChange={this.handleChangeDate}
              /></div>
              <div style={mystyle}>
              <DatePicker
              name="return_date"
              placeholder="Return Date"
              selected={this.state.startDate}
              onSelect={this.handleSelect}
              onChange={this.handleChangeDate}
              /></div>
              <div style={mystyle}>
                <input type="number" name='passenger' onChange={this.handleChange} placeholder="Passenger"/></div>
              <div style={mystyle}><button type="submit" name="searchsubmit" onClick={this.handleSubmit}>Search</button></div>
              </td>
              <td><SearchShow searchstring={this.state}></SearchShow></td></tr>
          </tbody>
        </table>
      </div> 
        );     
    }
}
  

export default App;
