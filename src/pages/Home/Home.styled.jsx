import styled from '@emotion/styled';
import { Container } from 'components/Container/Container.styled';

export const StyledContainer = styled(Container)`
  padding-top: 50px;
`;

export const SectionTitle = styled.div`
  display: flex;
  margin-bottom: 20px;
  & > h2 {
    font-size: 1.2rem;
    margin-right: 20px;
  }

  & > div {
    width: 100%;
    position: relative;
  }
  & > div::after {
    position: absolute;
    content: '';
    top: 50%;
    right: 0;
    width: inherit;
    height: 2px;
    background-color: #504a7950;
  }
`;

export const MovieList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 20px;
`;

export const MovieItem = styled.li`
  flex-basis: calc((100% - 20px) / 2);
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 4 * 20px) / 5);
  }
`;

export const MoviePoster = styled.img`
  display: block;
  object-fit: cover;
  aspect-ratio: 0.66;
  margin-bottom: 20px;
`;

export const MovieInfo = styled.div``;

export const MovieTitle = styled.h3`
  font-weight: 400;
  font-size: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow-y: hidden;
  margin-bottom: 10px;
`;

export const FlexItem = styled.div`
  display: flex;
  align-items: center;
`;
export const MovieYear = styled.p`
  font-size: 0.8rem;
  margin-right: 20px;
`;

export const MovieRating = styled.p`
  display: flex;
  align-items: center;
  column-gap: 5px;
  font-size: 0.8rem;
`;
