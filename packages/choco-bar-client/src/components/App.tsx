import React from 'react';

import NavBar from './NavBar';
import Error from './Error';
import { Content, Calculate } from '../containers';




const App: React.FC = () => {
  return <>
    <NavBar title="ChocoBar" />
    <Error>
      <Content />
    </Error>
    <Error >
      <Calculate />
    </Error>
  </>
}

export default App;
