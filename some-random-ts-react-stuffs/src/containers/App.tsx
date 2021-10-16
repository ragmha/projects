import React, { Component, ChangeEvent } from "react";
import logo from "./logo.svg";
import "./App.css";

const handleChange = Symbol();

class App extends Component {
  [handleChange] = (ev: ChangeEvent) => {};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <input onChange={this[handleChange]} />
      </div>
    );
  }
}

export default App;
