import React, { useRef } from 'react';
import { InfoTitle, Nav, StyledNavLink } from './AdditionalInfo.styled';
import { Container, Section } from 'components/Common';

const AdditionalInfo = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section>
      <Container>
        <InfoTitle ref={ref}>Additional information</InfoTitle>
        <Nav>
          <StyledNavLink to="cast" onClick={handleClick}>
            Cast
          </StyledNavLink>
          <StyledNavLink to="reviews" onClick={handleClick}>
            Reviews
          </StyledNavLink>
        </Nav>
      </Container>
    </Section>
  );
};

export default AdditionalInfo;
