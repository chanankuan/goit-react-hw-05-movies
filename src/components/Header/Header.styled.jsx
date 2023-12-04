import styled from '@emotion/styled';
import { Container } from 'components/Common';
import { Link, NavLink } from 'react-router-dom';

export const StyledHeader = styled.header``;

export const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const SiteWrapper = styled(Link)`
  display: flex;
  column-gap: 20px;
`;

export const SiteLogo = styled.img``;
export const SiteName = styled.img``;

export const Navbar = styled.nav`
  display: flex;
  column-gap: 20px;
  margin-left: auto;
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  font-weight: 500;
  color: #c9c9c9;
  transition: color 200ms ease-in-out;
  &.active {
    color: #fff;
  }
  &:hover {
    color: #fff;
  }
`;
