import React from 'react';
import { push as Menu } from 'react-burger-menu';
import Clock from 'react-live-clock';
import ReactAnimatedWeather from 'react-animated-weather';
import styled from 'styled-components';
import ReactCodeInput from 'react-code-input';
import _ from 'lodash';
import Timeline from 'react-time-line';

const Flexrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Flexcolumn = styled.div`
  text-align: center;
  color: white;
  width: ${props => (props.size / 12) * 100}vw;
`;

const TimelineWrapper = styled.div`
  margin-top: 32px;
  padding-top: 16px;
  overflow-y: scroll;
  height: 560px;
  width: 100%;

  .time-line {
    .time-label span {
      margin-top: 32px;
      margin-bottom: 16px;
      font-size: 32px;
    }

    li > .time-line-item {
      border: solid 1px;
      height: 48px;

      .time {
        font-size: 26px;
      }

      .time-line-header {
        font-size: 28px;
      }
    }
  }
`;

const defaults = {
  icon: 'CLEAR_DAY',
  color: 'royalblue',
  size: 180,
  animate: true,
};

const events = [
  { ts: '2018-11-17T14:24:46.587Z', text: 'Meeting with Apple' },
  { ts: '2018-11-17T13:23:46.587Z', text: 'Meeting with Orange' },
  { ts: '2018-11-17T12:23:46.587Z', text: 'Project Plan' },
  { ts: '2018-11-17T11:22:46.587Z', text: 'Plan B' },
  { ts: '2018-11-17T11:21:46.587Z', text: 'Team bonding' },
  { ts: '2018-11-17T19:20:46.587Z', text: 'Edited Profile' },
  { ts: '2018-11-16T12:22:46.587Z', text: 'Customer Meeting sessions' },
  { ts: '2018-11-16T12:21:46.587Z', text: 'Meeting with banana' },
  { ts: '2018-11-16T12:20:46.587Z', text: 'Meeting with various presidents' },
  { ts: '2018-11-15T12:22:46.587Z', text: 'Customer Meeting sessions' },
  { ts: '2018-11-15T12:21:46.587Z', text: 'Meeting with grapes' },
  { ts: '2018-11-15T12:20:46.587Z', text: 'Meeting with various presidents' },
  { ts: '2018-11-14T12:22:46.587Z', text: 'Customer Meeting sessions' },
  { ts: '2018-11-14T12:21:46.587Z', text: 'Meeting with melon' },
  { ts: '2018-11-13T12:20:46.587Z', text: 'Meeting with various presidents' },
  { ts: '2018-11-12T12:22:46.587Z', text: 'Customer Meeting sessions' },
  { ts: '2018-11-12T12:21:46.587Z', text: 'Meeting with water' },
  { ts: '2018-11-11T12:20:46.587Z', text: 'Meeting with various presidents' },
  { ts: '2018-11-11T12:22:46.587Z', text: 'Customer Meeting sessions' },
  { ts: '2018-11-11T12:21:46.587Z', text: 'Meeting with Orange' },
  { ts: '2018-11-11T12:20:46.587Z', text: 'Meeting with various presidents' },
];

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthorized: false,
    };

    this.onPinChange = _.debounce(this.onPinChange, 1000);
  }

  onPinChange = e =>
    e === '1234'
      ? this.setState({ isAuthorized: true })
      : this.setState({ isAuthorized: false });

  render() {
    return (
      <Menu
        {...this.props}
        width={'80%'}
        right
        id="push"
        disableOverlayClick={() =>
          false
            ? this.setState({ isAuthorized: true })
            : this.setState({ isAuthorized: false })
        }
      >
        <div>
          <Flexcolumn>
            <h1>RESERVATOR</h1>
          </Flexcolumn>
          <Flexcolumn>
            <h2>Meeting Room name</h2>
          </Flexcolumn>
        </div>

        <Flexcolumn>
          <Flexrow>
            <ReactAnimatedWeather
              icon={defaults.icon}
              color={defaults.color}
              size={defaults.size}
              animate={defaults.animate}
            />
            <Flexcolumn>
              <Flexrow>
                <Clock
                  style={{ fontSize: '60px' }}
                  format={'dddd'}
                  ticking={true}
                  timezone={'Europe/Helsinki'}
                />
              </Flexrow>
              <Flexrow>
                <Clock
                  style={{ fontSize: '40px' }}
                  format={'MMMM Do YY'}
                  ticking={true}
                  timezone={'Europe/Helsinki'}
                />
              </Flexrow>
              <Flexrow>
                <Clock
                  style={{ fontSize: '40px' }}
                  format={'h:mm:ss a'}
                  ticking={true}
                  timezone={'Europe/Helsinki'}
                />
              </Flexrow>
            </Flexcolumn>
          </Flexrow>
        </Flexcolumn>
        <br />
        <Flexcolumn>
          {this.state.isAuthorized ? (
            <TimelineWrapper>
              <Timeline items={events} />
            </TimelineWrapper>
          ) : (
            <ReactCodeInput
              type="password"
              fields={4}
              onChange={this.onPinChange}
            />
          )}
        </Flexcolumn>
      </Menu>
    );
  }
}

// TODO: remove react live clock and replace it with moment

// TODO: When meeting starts, the reservator bot
// notifies the channel that customer meeting is in progress
// using the slack api

// TODO: Customer Feedback, after meeting is done (optional),
// it has a countdown of 10 seconds before next meeting starts
// If nothing has been selected, the like button is clicked
// Use the google sheets api the Feedback emoji is associated
// with that meeting

export default Sidebar;
