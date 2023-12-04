import styled from '@emotion/styled';
import { Container } from 'components/Common';
import { Link, NavLink } from 'react-router-dom';

export const Backdrop = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => `url(${props.backdrop})`} center no-repeat;
    background-size: cover;
    filter: blur(5px);
    z-index: -1;
  }
  & img {
    cursor: pointer;
    transition: transform 200ms ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
  @media screen and (min-width: 1000px) {
    height: 600px;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ imageUrl }) => imageUrl}) center no-repeat;
  background-size: cover;
  filter: blur(4px);
`;

export const GoBack = styled(Link)`
  display: flex;
  align-items: center;
  width: fit-content;
  column-gap: 10px;
  font-size: 0.8rem;
  margin-bottom: 20px;
  transition: transform 200ms ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledContainer = styled(Container)`
  position: relative;
`;

export const MovieItem = styled.div`
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    column-gap: 30px;
  }
`;

export const MoviePoster = styled.img`
  border-radius: 16px;
  width: 200px;
  height: 300px;
  margin: 0 auto;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const MovieTitle = styled.h1`
  color: #fff;
  font-family: Poppins;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  max-width: 350px;
  margin-bottom: 40px;
`;
export const MovieInfo = styled.div``;

export const Details = styled.div``;

export const DetailsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 10px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    justify-content: start;
  }
`;

export const DetailsItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 6px;

  &:first-of-type::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -15px;
    transform: translateY(-50%);
    height: 120%;
    width: 1px;
    background-color: #92929d;
  }

  @media screen and (min-width: 768px) {
    &:not(:last-of-type)::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -15px;
      transform: translateY(-50%);
      height: 120%;
      width: 1px;
      background-color: #92929d;
    }
  }
`;

export const Icon = styled.img`
  width: 20px;
`;

export const Accent = styled.span`
  color: #92929d;
  font-size: 0.8rem;
`;

export const Overview = styled.p`
  font-size: 1rem;
  line-height: 150%;
`;

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
  &.active::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: #3a3f47;
  }
`;
