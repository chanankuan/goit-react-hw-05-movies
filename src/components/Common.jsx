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
  @media screen and (min-width: 980px) {
    max-width: 980px;
  }
`;

export const Section = styled.section``;
