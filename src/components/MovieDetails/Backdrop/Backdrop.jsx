import React from 'react';
import PropTypes from 'prop-types';
import { Button, Section } from 'components/Common';
import { Background } from './Backdrop.styled';
import player from '../../../assets/images/player.svg';

const Backdrop = ({ imgUrl, handleOpen }) => {
  return (
    <Section>
      <Background backdrop={imgUrl}>
        <Button type="button" onClick={handleOpen}>
          <img src={player} alt="Player icon" />
        </Button>
      </Background>
    </Section>
  );
};

Backdrop.propTypes = {
  imgUrl: PropTypes.string,
  handleOpen: PropTypes.func.isRequired,
};

export default Backdrop;
