
import React from 'react';
import styled from 'styled-components';


const StyledNav = styled.nav`
  background-color:	#ff6090;
  height: 70px;
  line-height: 70px;
`;

const StyledNavTitle = styled.div`
  color: blanchedalmond;
  font-size: 30px;
  font-family: 'Alata', sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 20px;
  text-align: center;
`;

const NavBar: React.FC<{ title: string }> = ({ title }) =>
    <StyledNav>
        <StyledNavTitle >
            {title}
        </StyledNavTitle>
    </StyledNav>



export default NavBar