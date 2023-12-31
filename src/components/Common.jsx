import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px;
  margin: 0 auto;
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

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
`;

export const Player = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Icon = styled.img``;
