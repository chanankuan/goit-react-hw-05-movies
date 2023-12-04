import React from 'react';
import { InfoTitle, Nav, StyledNavLink } from './AdditionalInfo.styled';
import { Container, Section } from 'components/Common';

const AdditionalInfo = () => {
  return (
    <Section>
      <Container>
        <InfoTitle>Additional information</InfoTitle>
        <Nav>
          <StyledNavLink to="cast">Cast</StyledNavLink>
          <StyledNavLink to="reviews">Reviews</StyledNavLink>
        </Nav>
      </Container>
    </Section>
  );
};

export default AdditionalInfo;
