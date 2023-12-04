import React from 'react';
import { InfoTitle, Nav, StyledNavLink } from './AdditionalInfo.styled';

const AdditionalInfo = () => {
  return (
    <>
      <InfoTitle>Additional information</InfoTitle>
      <Nav>
        <StyledNavLink to="cast">Cast</StyledNavLink>
        <StyledNavLink to="reviews">Reviews</StyledNavLink>
      </Nav>
    </>
  );
};

export default AdditionalInfo;
