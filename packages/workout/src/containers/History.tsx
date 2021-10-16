import React, { Fragment } from 'react';
import data from '../data/muscle-building.json';
import { WingBlank, WhiteSpace, Card, Button } from 'antd-mobile';
import styled from 'styled-components';

const colorPallete = [
  '#6CDDDA',
  '#987D92',
  '#A083DE',
  '#F09A78',
  '#E6B9D1',
  '#F97AA3',
];

const randomColorPallete = () =>
  colorPallete[Math.floor(colorPallete.length * Math.random())];

const StyledCardHeader: any = styled(Card.Header)`
  background-color: ${(props: any) =>
    props.random ? randomColorPallete() : '#f97aa3'};

  div {
    color: whitesmoke;
    font-size: 24px;
    font-family: 'Archivo', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
  }
`;
const StyledCardBody: any = styled(Card.Body)`
  display: flex;
  justify-content: space-between;
  background-color: white;
`;

const CardBodyItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .header {
    color: grey;
    font-size: 10px;
  }
  .data {
    color: black;
    font-size: 24px;
  }
`;

const StyledButton: any = styled(Button)`
  background-color: transparent;
  color: #f97aa3;
  border: none;
  position: unset !important;
  padding-bottom: 2.5vw;
`;

function History() {
  return (
    <div>
      {data.map((data: any) => (
        <Fragment key={data.id}>
          <WingBlank size="lg">
            <WhiteSpace size="lg" />
            <Card>
              <StyledCardHeader
                title={`${data.day} - ${data.exercise}`}
                random="true"
              />
              <StyledCardBody>
                <CardBodyItems>
                  <span className="header">Miles</span>
                  <span className="data">15.56</span>
                </CardBodyItems>
                <CardBodyItems>
                  <span className="header">Overall Time</span>
                  <span className="data">01:38:22</span>
                </CardBodyItems>
                <CardBodyItems>
                  <StyledButton icon="check" />
                </CardBodyItems>
              </StyledCardBody>
            </Card>
            <WhiteSpace size="lg" />
          </WingBlank>
        </Fragment>
      ))}
    </div>
  );
}

export default History;
