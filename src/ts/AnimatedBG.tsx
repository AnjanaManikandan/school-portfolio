import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedBackground = () => {
  const styles = useSpring({
    from: { opacity: 0, background: '#141414' },
    to: { opacity: 1, background: '#61dafb' },
    config: { duration: 2000 },
  });

  return <animated.div style={styles}>Your Content Goes Here</animated.div>;
};

export default AnimatedBackground;
