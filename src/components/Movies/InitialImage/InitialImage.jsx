import React from 'react';
import startExploring from '../../../assets/images/no-data-initial.png';

const InitialImage = () => {
  return (
    <img
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      src={startExploring}
      alt="Start exploring"
    />
  );
};

export default InitialImage;
