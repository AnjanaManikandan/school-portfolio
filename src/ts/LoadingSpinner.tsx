import React from 'react';
import spinner from '../img/Walk.gif';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-spinner">
      <img src={spinner} alt="Loading..." />
    </div>
  );
};

export default LoadingSpinner;