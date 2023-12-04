import styled from '@emotion/styled';

export const Flex = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 10px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  flex-basis: calc((100% - 2 * 10px) / 3);
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 4 * 10px) / 5);
  }
  @media screen and (min-width: 1000px) {
    flex-basis: calc((100% - 6 * 10px) / 7);
  }
`;

export const Image = styled.img`
  width: 100%;
  min-height: 156px;
  margin-bottom: 5px;
  flex: 1;
  @media screen and (min-width: 768px) {
    min-height: 198px;
  }
  @media screen and (min-width: 1000px) {
    min-height: 188px;
  }
`;

export const Name = styled.p`
  font-size: 0.8rem;
  margin-bottom: 10px;
  flex: 1;
`;

export const Character = styled.p`
  font-size: 0.8rem;
  flex: 1;
`;
