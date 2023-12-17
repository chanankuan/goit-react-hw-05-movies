import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import arrowUp from '../../assets/images/arrow-up-solid.svg';
import { ArrowUp, StyledButton } from './ScrollTopButton.styled';

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: true });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Remove the event listener when the component is unmounted
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledButton type="button" onClick={scrollToTop} isVisible={isVisible}>
      <ArrowUp src={arrowUp} alt="arrow up" width={16} />
    </StyledButton>
  );
};

export default ScrollTopButton;
