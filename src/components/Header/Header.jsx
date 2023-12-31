import React from 'react';
import {
  StyledContainer,
  StyledHeader,
  StyledLink,
  Navbar,
} from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <Navbar>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </Navbar>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
