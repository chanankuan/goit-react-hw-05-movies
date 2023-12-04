import styled from '@emotion/styled';

export const Title = styled.div`
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
