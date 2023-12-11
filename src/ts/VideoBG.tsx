import React from 'react';
import backgroundVideo from '../img/planet.gif'

const VideoBackground: React.FC = () => {
    return (
      <div className="background">
        <img src={backgroundVideo} alt="Loading..." />
      </div>
    );
  };

export default VideoBackground;

