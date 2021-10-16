import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import useFetch from 'use-http';


const OutterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const InnerWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const InnerWrapperResult = styled.div`
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
`


const CalculateWrapper = styled.div`
  margin-top: 40px;
  padding-top: 20px;
  margin-bottom: 0;
  box-shadow: 0 10px 10px 10px rgba(0,0,0,0.2);
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;
  width: 500px;

  &:hover {
    box-shadow: 0 10px 10px 0 rgba(0,0,0,0.2);
  }
`

const StyledHeader = styled.div`
  color: darkred;
  font-size: 20px;
  font-family: 'Alata', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 6px;
  text-align: center;
  border-top: 10px double;
  border-bottom: 10px double;
`

const StyledInputSubmit = styled.input`
  background-color: #673ab7;
  border-radius: 0.15em;
  box-shadow: inset 0 -20px 0 -20px rgba(0,0,0,0.17);
  box-sizing: border-box;
  color: #FFFFFF;
  display: inline-block;
  font-family: 'Alata', sans-serif;
  letter-spacing: 2px;
  font-size: 20px;
  font-weight: 600;
  padding: 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  width: 180px;
`;

const Reset = styled.button`
  background-color: #673ab7;
  border-radius: 0.15em;
  box-shadow: inset 0 -20px 0 -20px rgba(0,0,0,0.17);
  box-sizing: border-box;
  color: #FFFFFF;
  display: inline-block;
  font-family: 'Alata', sans-serif;
  letter-spacing: 2px;
  font-size: 20px;
  font-weight: 600;
  padding: 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  width: 180px;
`;

const StyledInput = styled.input`
  border: solid 2px darkturquoise;
  height: 50px;
  line-height: 50px;
  width: 100px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 600;
  color: darkolivegreen;
  text-align: center;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Label = styled.div`
  text-transform: uppercase;
  font-weight: 900;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledResult = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 8px;
  margin-bottom: 10px;
  width: 100%;
`;

const StyledResultLabel = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 18px;
  font-weight: 900;
  text-transform: capitalize;
  letter-spacing: 2px;
  margin-right: 40px;
  width: 80%;
`;

const StyledResultValue = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 18px;
  font-weight: 600;
  width: 20%;
`;

const StyledError = styled.span`
  margin-bottom: 10px;
  font-weight: 900;
  color: red;
`;


const Calculate: React.FC = () => {
  const [result, setResult]: any = useState({});

  const [request, response] = useFetch('https://choco-bar.herokuapp.com');
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      numberOfBars: 1
    }
  })



  const onSubmit = async (data: any) => {
    const submitValue = await request.post('/', {
      numberOfBars: Number(data.numberOfBars),
      pricesOfBarPacketBox: [2.30, 25, 230], //TODO: Replace it with API call
      quantitiesOfBarPacketBox: [1, 12, 120] //TODO: Replace it with API call
    })

    if (response.ok) {
      setResult(submitValue)
    }
  }

  const resultContainKeys = 'numberOfBars' in result
    && 'numberOfPacks' in result
    && 'numberOfBoxes' in result
    && 'totalCost' in result;

  return <OutterWrapper>
    <CalculateWrapper>
      <StyledHeader>SaveMoney Calculator</StyledHeader>
      {result && resultContainKeys ?
        <InnerWrapper>
          <InnerWrapperResult >
            {Object.keys(result).map((item) => {
              return <StyledResult key={item}>
                <StyledResultLabel>{item}:</StyledResultLabel>
                <StyledResultValue>{result[item]}</StyledResultValue>
              </StyledResult>
            })}
          </InnerWrapperResult>
          <Reset onClick={() => setResult({})}>RESET</Reset>
        </InnerWrapper> :
        <form onSubmit={handleSubmit(onSubmit)}>
          <InnerWrapper>
            <Label>Enter Quantity:</Label>
            <StyledInput name="numberOfBars" type="number" ref={register({ required: true })} />
            {errors.numberOfBars && <StyledError>This quantity number is required</StyledError>}
            <StyledInputSubmit type="submit" />
          </InnerWrapper>
        </form>
      }


    </CalculateWrapper>

  </OutterWrapper >
}


export default Calculate;
export { Calculate }