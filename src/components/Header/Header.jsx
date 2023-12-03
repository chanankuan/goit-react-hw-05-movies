import React from 'react';
import {
  SiteWrapper,
  SiteLogo,
  SiteName,
  StyledContainer,
  StyledHeader,
  StyledLink,
  Navbar,
} from './Header.styled';
import logo from '../../assets/images/logo.svg';
import logoName from '../../assets/images/logo-name.svg';

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <SiteWrapper to="/">
          <SiteLogo src={logo} />
          <SiteName src={logoName} />
        </SiteWrapper>

        <Navbar>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Navbar>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
