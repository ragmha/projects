import React, { Fragment } from 'react';

import styled from 'styled-components';
import { WhiteSpace, Button } from 'antd-mobile';

const gridData = [
  {
    icon: 'search',
    header: 'Miles',
    data: 15.56,
  },
  {
    icon: 'search',
    header: 'Estimated Time',
    data: 11.38,
  },
  {
    icon: 'search',
    header: 'Calories Burned (Cal)',
    data: 8793,
  },
  {
    icon: 'search',
    header: 'Heart Rate (BPM)',
    data: 76.5,
  },
];

const StyledButton: any = styled(Button)`
  margin: 40px auto;
  height: 180px;
  width: 180px;
  border-radius: 50%;
  border: 1px solid red;
  text-align: center;
  line-height: 180px;
  background-color: #6cddda;
  border: solid 10px #6cddda;
  position: absolute;

  span {
    color: whitesmoke;
    font-weight: 500;
    font-size: 20px;
    font-family: 'Archivo', sans-serif;
  }
`;

const Grid = styled.div`
  background-color: #3a2d7c;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 40%;
  padding: 0vw;

  > div:nth-of-type(1) {
    box-shadow: inset 0px -0.5px 0px 0px white;
  }

  > div:nth-of-type(2) {
    box-shadow: inset 0.5px -0.5px 0px 0px white;
  }

  > div:nth-of-type(4) {
    box-shadow: inset 0.5px 0px 0px 0px white;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: inherit;
  padding: 5vw;
`;

const GridItemHeader = styled.span`
  font-family: inherit;
  color: whitesmoke;
  font-size: 12px;
`;

const GridData = styled.span`
  font-family: inherit;
  color: white;
  font-size: 40px;
  margin-top: 2.5vw;
`;

function Home() {
  return (
    <Fragment>
      <div style={{ textAlign: 'left', marginLeft: '5vw' }}>
        <h2>Good Morning</h2>
        <div style={{ color: 'white-smoke', fontWeight: 200 }}>
          25 challenge can upgrade your skill
        </div>
      </div>
      <WhiteSpace />

      <StyledButton
        // onClick={() => this.setState({ start: !this.state.start })}
        onClick={() => console.log('starting...')}
      >
        <span>START NOW</span>
      </StyledButton>
      <WhiteSpace />
      <Grid>
        {gridData.map((dataItem: any, index: number) => (
          <GridItem key={index}>
            <GridItemHeader>{dataItem.header}</GridItemHeader>
            <GridData>{dataItem.data}</GridData>
          </GridItem>
        ))}
      </Grid>
    </Fragment>
  );
}

export default Home;
