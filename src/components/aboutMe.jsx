import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import gsap from 'gsap';

export default function AboutMe() {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }
    );
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 4,
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" maxWidth="md">
        I’m a creative developer who blends design with interaction. I love WebGL, GSAP, and turning ideas into immersive experiences.
      </Typography>
    </Box>
  );
}