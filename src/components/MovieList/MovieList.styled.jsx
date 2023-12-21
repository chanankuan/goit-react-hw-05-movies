import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Player } from '../Common';

export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 40px;
`;

export const MovieItem = styled.li`
  flex-basis: calc((100% - 20px) / 2);
  &:hover {
    .poster {
      transition: filter 200ms ease-in-out;
      filter: brightness(0.8);
    }
    .player {
      transition: opacity 200ms ease-in-out;
      opacity: 1;
    }
  }
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 4 * 20px) / 5);
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const MoviePoster = styled.img`
  display: block;
  object-fit: cover;
  aspect-ratio: 0.66;
  margin-bottom: 20px;
`;

export const StyledPlayer = styled(Player)`
  opacity: 0;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const MovieTitle = styled.h3`
  flex: 1;
  font-weight: 400;
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const FlexItem = styled.div`
  display: flex;
  align-items: center;
`;
export const MovieYear = styled.p`
  font-size: 0.8rem;
  margin-right: 20px;
  line-height: 150%;
`;

export const MovieRating = styled.p`
  display: flex;
  column-gap: 5px;
  font-size: 0.8rem;
  line-height: 150%;
  & > img {
    padding-bottom: 2px;
  }
`;
