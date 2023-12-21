import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const InfoTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const Nav = styled.nav`
  display: flex;
  column-gap: 20px;
  margin-bottom: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  position: relative;
  font-weight: 400;

  &.active::after,
  &:hover::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: #3a3f47;
  }
`;
