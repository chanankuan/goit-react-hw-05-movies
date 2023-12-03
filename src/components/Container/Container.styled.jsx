import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px;
  margin: 0 auto;
  border: 1px solid red;

  @media screen and (min-width: 375px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1080px;
  }
`;
