import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import $ from "jquery";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let weather = $.ajax({
      method: "GET",
      url: `http://localhost:3001/weather`
    });

    console.log(weather);
  }

  render() {
    return (
      <div className="App">
        <h1>HERE I AM MOtheR</h1>
        <h1>HERE I AM MOtheR</h1>
        <h1>HERE I AM MOtheR</h1>
        <h1>HERE I AM MOtheR</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" />
          <input type="submit" value="Submit" />>
        </form>
      </div>
    );
  }
}

export default App;
