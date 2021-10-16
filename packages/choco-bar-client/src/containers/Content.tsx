import React, { useRef, useEffect, useState } from 'react';
import useFetch from 'use-http'
import { BarLoader } from 'react-css-loaders';
import styled from 'styled-components';

interface IBar {
  id: number;
  name: string;
  weight: number;
  company: string;
  price: number;
  quantity: number;
  img: string;
  pricesofbarpacketbox: Array<number>;
  quantitiesofbarpacketbox: Array<number>;
}

const OutterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  margin-left: 120px;
  margin-right: 120px;
  margin-top: 60px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;


  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`


const StyledImage = styled.img`
  width: 40%;
`

const StyledContent = styled.div`
  width: 80%;
`
const StyledContentHeading = styled.div`
 font-size: 30px;
 font-weight: 700;
 text-align: center;
`

const StyledContentDescription = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
  margin-top: 20px;
  width: 100%;
`

const StyledContentDescriptionWrapper = styled.div`
  display: flex;
`

const StyledLabel = styled.div`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
`

const StyledContentPrice = styled.div`
 color: #B12704;
 font-size: 16px;
 font-weight: 600;
 &::before {
   content: '€ '
 }

 margin-left: 8px;
`

const StyledContentWeight = styled.div`
 color: blueviolet;
 font-size: 16px;
 font-weight: 600;
 margin-left: 8px;

 &::after {
   content: 'g'
 }
`

const StyledContentQuantity = styled.div`
 color: darkslategray;
 font-size: 16px;
 font-weight: 600;
 margin-left: 8px;

`



const Content: React.FC = () => {
  const [bars, setBars] = useState<Array<IBar>>([])
  const [request, response] = useFetch('https://choco-bar.herokuapp.com');

  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    initializeBars();
  })


  async function initializeBars() {
    const initalBars = await request.get('/');
    if (response.ok) setBars(initalBars)
  }


  return (
    <>
      {request.error && <Wrapper>{"Failed loading choclate bar"}</Wrapper>}
      {request.loading && <BarLoader />}
      <OutterWrapper>
        {bars.map((bar) => <Wrapper key={bar.id}>
          <StyledImage src={bar.img} alt="chocolate-bar" />
          <StyledContent>
            <StyledContentHeading>{bar.name}</StyledContentHeading>
            <StyledContentDescription>
              <StyledContentDescriptionWrapper>
                <StyledLabel>quantity:</StyledLabel>
                <StyledContentQuantity>{bar.quantity}</StyledContentQuantity>
              </StyledContentDescriptionWrapper>
              <StyledContentDescriptionWrapper>
                <StyledLabel>price:</StyledLabel>
                <StyledContentPrice>{bar.price}</StyledContentPrice>
              </StyledContentDescriptionWrapper>
              <StyledContentDescriptionWrapper>
                <StyledLabel>weight:</StyledLabel>
                <StyledContentWeight>{bar.weight}</StyledContentWeight>
              </StyledContentDescriptionWrapper>
            </StyledContentDescription>
          </StyledContent>
        </Wrapper>)}
      </OutterWrapper>

    </>
  )
}

export default Content;
export { Content }