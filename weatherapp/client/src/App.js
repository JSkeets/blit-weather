import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import $ from "jquery";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { zip: "" };
    this.update = this.update.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let weather = $.ajax({
      method: "POST",
      url: `http://localhost:3001/weather`,
      data: { zip: this.state.zip }
    });

    console.log(weather);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  render() {
    return (
      <div className="App">
        <h1>HERE I AM MOtheR</h1>
        <h1>HERE I AM MOtheR</h1>
        <h1>HERE I AM MOtheR</h1>
        <h1>HERE I AM MOtheR</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Please Enter Your Zip Code
            <input
              type="text"
              placeholder="12345"
              value={this.state.zip}
              onChange={this.update("zip")}
            />
          </label>
          <input type="submit" value="Submit" />>
        </form>
      </div>
    );
  }
}

export default App;
