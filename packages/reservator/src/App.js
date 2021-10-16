import React, { Component } from 'react';
import moment from 'moment';
import {
  API_KEY as apiKey,
  CALENDAR_ID as calenderId,
  CLIENT_ID as clientId,
  DISCOVERY_DOCS as discoveryDocs,
  SCOPES as scopes,
} from './config';

import { SideBar, PlanetAnimation, SpeechBubbleAnimation } from './components';
import './App.css';

class App extends Component {
  state = {
    events: [],
    isBusy: false,
    isEmpty: false,
    isLoading: true,
    time: moment().format('dd, Do MMMM, h:mm A'),
  };

  componentDidMount = () => {
    console.log('Mounting');
    window.gapi.load('client:auth2', this.initClient);
  };

  tick = () => {
    let time = moment().format('dddd, Do MMMM, h:mm A');
    this.setState({ time });
  };

  initClient = () => {
    window.gapi.client
      .init({
        apiKey,
        clientId,
        discoveryDocs,
        scopes,
      })
      .then(() => {
        this.listUpcomingEvents();
      });
  };

  listUpcomingEvents = () => {
    console.log(window.gapi);
    window.gapi.client.calendar.events
      .list({
        calendarId: calenderId,
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: 'startTime',
      })
      .then(response => console.log(response));
  };

  render() {
    return (
      <div id="App">
        <SideBar pageWrapId={'page-wrap'} outerContainerId={'App'} />
        <div
          id="page-wrap"
          style={{
            backgroundColor: `${this.state.isBusy ? '#c62828' : '#00CC66'}`,
          }}
        >
          {this.state.isBusy ? (
            <div className="busy">
              <h1 className="header">BUSY</h1>
              <SpeechBubbleAnimation />
            </div>
          ) : (
            <div className="open">
              <h1 className="header">OPEN</h1>
              <PlanetAnimation />
            </div>
          )}
        </div>
        <button
          className="click"
          onClick={() => this.setState({ isBusy: !this.state.isBusy })}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default App;
