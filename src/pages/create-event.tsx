import { time } from 'console';
import { hostname } from 'os';
import React, { Component, useState } from 'react';

class CreateEvent extends Component {
    state = {
      EventName: String,
      HostName: String,
      StartTime: Number,
      EndTime: Number,
      date: Date,
      Location: String
    };
  
    handleInput = (event: { target: { value: any; }; }) => {
      this.setState({ name: event.target.value });
      this.setState({ HostName: event.target.value });
      this.setState({ StartTime: event.target.value });
      this.setState({ EndTime: event.target.value });
      this.setState({ date: event.target.value });
      this.setState({ Location: event.target.value });
    };
  
    logValue = () => {
      console.log(this.state.EventName);
      console.log(this.state.HostName);
      console.log(this.state.StartTime);
      console.log(this.state.EndTime);
      console.log(this.state.date);
      console.log(this.state.Location);

    
    };
  
    render() {
      return (
        <div>
          <input onChange={this.handleInput} placeholder="Your name" />
          <button onClick={this.logValue}>Enter</button>
<p></p>
          <input onChange={this.handleInput} placeholder="Event name" />
          <button onClick={this.logValue}>Enter</button>
<p></p>
          <input  type = "time" onChange={this.handleInput} placeholder="Start time" />
          <button onClick={this.logValue}>Enter</button>
<p></p>
          <input  type = "time" onChange={this.handleInput} placeholder="End time" />
          <button onClick={this.logValue}>Enter</button>
 <p></p>
          <input  type = "date" onChange={this.handleInput} placeholder="Date" />
          <button onClick={this.logValue}>Enter</button>
<p></p>
          <input onChange={this.handleInput} placeholder="Location" />
          <button onClick={this.logValue}>Enter</button>
        </div>
      );
    }
  }

  export default CreateEvent