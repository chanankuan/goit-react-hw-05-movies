import styled from '@emotion/styled';

export const List = styled.ul`
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
  & > img {
    padding-bottom: 2px;
  }
`;
