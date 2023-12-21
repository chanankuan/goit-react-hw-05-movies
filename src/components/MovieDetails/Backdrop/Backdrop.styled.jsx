import styled from '@emotion/styled';

export const Background = styled.div`
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
