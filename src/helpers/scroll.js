import { scroller } from 'react-scroll';

export const handleScroll = element => {
  scroller.scrollTo(element, {
    duration: 500,
    smooth: true,
    offset: -120,
  });
};
