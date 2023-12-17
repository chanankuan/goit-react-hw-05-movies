import styled from '@emotion/styled';

export const StyledButton = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
  border: none;
  outline: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  opacity: ${props => (props.isVisible ? 0.3 : 0)};
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  transition: opacity 200ms ease-in-out, visibility 200ms ease-in-out;
  &:hover {
    opacity: 100%;
  }
`;

export const ArrowUp = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
