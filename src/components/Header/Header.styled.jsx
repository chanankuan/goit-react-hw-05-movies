import styled from '@emotion/styled';
import { Container } from 'components/Common';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header``;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
`;

export const Navbar = styled.nav`
  display: flex;
  column-gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  font-size: 1.2rem;
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
