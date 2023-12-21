import styled from '@emotion/styled';
import { Button } from 'components/Common';
import { Link } from 'react-router-dom';

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

export const MovieItem = styled.div`
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
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    justify-content: start;
  }
`;

export const DetailsItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 6px;

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
`;

export const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: #fff;
  padding: 0;
  margin-bottom: 20px;
`;

export const Accent = styled.span`
  color: #92929d;
  font-size: 0.8rem;
`;

export const Overview = styled.p`
  font-size: 1rem;
  line-height: 150%;
  margin-bottom: 20px;
`;
