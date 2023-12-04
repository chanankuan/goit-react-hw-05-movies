import styled from '@emotion/styled';
import search from '../../../assets/images/Search.svg';

export const Title = styled.h1`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 24px;
`;
export const Form = styled.form`
  font-size: 0.8rem;
  line-height: 150%;
  display: flex;
  width: 100%;
  max-width: 375px;
  border-radius: 16px;
  background: #3a3f47;
  padding: 10px 25px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 90%;
  height: 100%;
  color: #fff;
  background: #3a3f47;
  border: none;
  outline: none;
  padding: 0;
  &::placeholder {
    color: #67686d;
  }
`;

export const Submit = styled.input`
  width: 10%;
  background-image: ${`url(${search})`};
  background-repeat: no-repeat;
  background-position: right center;
  border: none;
  background-color: #3a3f47;
  padding: 0;
`;
