import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import OpeningOverlay from '../components/openingOverlay';
import noisyBg from '../../public/images/noisyBg.jpg';
import MainCanvas from '../components/three/mainCanvas'

export default function HomePage() {
  const [showOpening, setShowOpening] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowOpening(false);
    }, 3600);

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
      {/* 🪵 Noisy Background */}
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

      {/* 🌀 Spinning CD via R3F */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <MainCanvas />
      </Box>

      {/* ⬛ Opening Overlay */}
      {showOpening && <OpeningOverlay />}
    </Box>
  );
}