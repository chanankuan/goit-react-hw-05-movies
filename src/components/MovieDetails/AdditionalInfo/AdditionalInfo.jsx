import React, { useRef } from 'react';
import { InfoTitle, Nav, StyledNavLink } from './AdditionalInfo.styled';
import { Container, Section } from 'components/Common';

const AdditionalInfo = () => {
  const ref = useRef(null);

  const handleClick = () => {
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  return (
    <Section>
      <Container>
        <InfoTitle ref={ref} name="infoTitle">
          Additional information
        </InfoTitle>
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
