import React, { useState } from 'react';
import { NavBar, Tabs, Badge } from 'antd-mobile';
import styled from 'styled-components';

import Home from './Home';
import Challenges from './Challenges';
import History from './History';
import Profile from './Profile';

// TODO: use TabBar => https://mobile.ant.design/components/tab-bar/

const tabs = [
  { headerTitle: 'Home', title: <Badge>Home</Badge> },
  { headerTitle: 'Challenges', title: <Badge dot>Challenges</Badge> },
  { headerTitle: 'History', title: <Badge dot>History</Badge> },
  { headerTitle: 'Profile', title: <Badge>Profile</Badge> },
];

function App() {
  const [header, setHeader] = useState('Workout');
  return (
    <Wrapper>
      <StyledNavBar>{header}</StyledNavBar>
      <Footer>
        <Tabs
          tabs={tabs}
          initialPage={3}
          tabBarPosition="bottom"
          renderTab={tab => <span>{tab.title}</span>}
          onTabClick={tab => setHeader(tab.headerTitle)}
        >
          <TabContent>
            <Home />
          </TabContent>
          <TabContent>
            <Challenges />
          </TabContent>
          <TabContent>
            <History />
          </TabContent>
          <TabContent>
            <Profile />
          </TabContent>
        </Tabs>
      </Footer>
    </Wrapper>
  );
}

export default App;

const StyledNavBar = styled(NavBar)`
  background-color: #3a2d7c;
  font-family: 'Archivo', sans-serif;
  font-style: normal;
  font-weight: 900;
  text-transform: uppercase;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 8px;
`;

const Wrapper = styled.div`
  background-color: #3a2d7c;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: white;
`;

const TabContent = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  background-color: inherit;
  height: 175vw;
  padding: 2.5vw;
  text-align: center;
`;

const Footer = styled.div`
  color: grey;
  justify-self: flex-end;
  height: auto;
`;
