import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import $ from "jquery";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { zip: "", weather: "", error: "" };
    this.update = this.update.bind(this);
    this.handleData = this.handleData.bind(this);
    this.handleError = this.handleError.bind(this);
    this.weatherForm = this.weatherForm.bind(this);
  }

  handleSubmit(event) {
    let stateWeather = this.state.weather;
    event.preventDefault();
    let weather = $.ajax({
      method: "POST",
      url: `http://localhost:3001/weather`,
      data: { zip: this.state.zip },
      success: function(data) {
        this.handleData(data);
      }.bind(this),
      error: function() {
        this.handleError();
      }.bind(this)
    });

    console.log(this.state);
  }

  handleError() {
    alert("Invalid Zip Code");
    this.refs.zipCode.value = "";
  }

  handleData(data) {
    this.setState({
      weather: data
    });
    this.refs.zipCode.value = "";
    console.log(this.state);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  weatherForm() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            Please Enter Your Zip Code
            <input
              type="text"
              value={this.state.zip}
              ref="zipCode"
              onChange={this.update("zip")}
            />
          </label>
          <input type="submit" value="Submit" />>
        </form>
      </div>
    );
  }

  cachedFlag(flag) {
    console.log(flag);
    if (flag) {
      return <h1>This result was retrieved from a cache</h1>;
    }
  }

  render() {
    if (this.state.weather == "") {
      return (
        <div>
          <h1>Let's Get Your Weather</h1>
          {this.weatherForm()}
        </div>
      );
    } else {
      return (
        <div className="App">
          <h1>Check the weather somewhere else</h1>
          {this.weatherForm()}
          {this.cachedFlag(this.state.weather.cached)}
          <table>
            <tr>
              <th>Current Temp</th>
              <th>Today's High</th>
              <th>Today's Low</th>
              <th>Humidity</th>
            </tr>
            <tr>
              <th>{this.state.weather.main.temp} F</th>
              <th>{this.state.weather.main.temp_max} F</th>
              <th>{this.state.weather.main.temp_min} F</th>
              <th>{this.state.weather.main.humidity} %</th>
            </tr>
          </table>
        </div>
      );
    }
  }
}

export default App;
