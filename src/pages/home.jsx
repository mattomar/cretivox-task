import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import OpeningOverlay from '../components/openingOverlay'; // adjust path as needed
import noisyBg from '../assets/images/noisyBg.jpg';

export default function HomePage() {
  const [showOpening, setShowOpening] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowOpening(false);
    }, 3600); // match the GSAP animation duration

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: 'black',
        overflow: 'hidden',
        color: 'white',
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src={noisyBg}
        alt="Noisy Background"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotate(90deg)',
          maxWidth: '100vh',
          maxHeight: '100vw',
          objectFit: 'contain',
          zIndex: 0,
          opacity: 0.1,
          pointerEvents: 'none',
          filter: 'contrast(1.2) brightness(0.6)',
        }}
      />

      {/* Main Content */}
      <Box sx={{ position: 'relative', zIndex: 1, p: 4 }}>
        <Typography variant="h4">Welcome to My Personal Website</Typography>
        {/* Add the rest of your homepage sections here */}
      </Box>

      {/* Overlay */}
      {showOpening && <OpeningOverlay />}
    </Box>
  );
}