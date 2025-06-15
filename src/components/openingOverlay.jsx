import { Box, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import React from 'react';
import openingBackground from '../../public/images/openingCd.jpg';
import noisyBg from '../../public/images/noisyBg.jpg';

export default function OpeningOverlay() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline();

    tl.fromTo(
      textRef.current,
      { opacity: 0, filter: 'blur(8px)', scale: 0.96 },
      { opacity: 1, filter: 'blur(0px)', scale: 1, duration: 1.6, ease: 'power3.out' }
    )
      .to(textRef.current, { duration: 0.6 })
      .to(
        textRef.current,
        { opacity: 0, filter: 'blur(10px)', scale: 1.05, duration: 1.2, ease: 'power2.inOut' },
        '+=0'
      )
      .to(
        bgRef.current,
        { opacity: 0, filter: 'blur(10px)', scale: 1.05, duration: 1.4, ease: 'power2.inOut' },
        '-=1.0'
      );

    return () => tl.kill();
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        zIndex: 10,
        pointerEvents: 'none',
      }}
    >
      {/* Noisy Background */}
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
          zIndex: -1,
          opacity: 0.1,
          pointerEvents: 'none',
          filter: 'contrast(1.2) brightness(0.6)',
        }}
      />

      {/* Central Background Image */}
      <Box
        ref={bgRef}
        component="img"
        src={openingBackground}
        alt="Opening Background"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) scale(1)',
          maxWidth: '80vw',
          maxHeight: '80vh',
          objectFit: 'contain',
          zIndex: 0,
          opacity: 0.25,
        }}
      />

      {/* Text */}
      <Typography
        ref={textRef}
        variant="h2"
        sx={{
          zIndex: 1,
          color: 'white',
          fontFamily: 'La Cerchia',
          fontWeight: 'normal',
          fontSize: {
            xs: '3rem',
            sm: '5rem',
            md: '6rem',
          },
          letterSpacing: '0.02em',
          whiteSpace: 'nowrap',
        }}
      >
        Hello Creativox
      </Typography>
    </Box>
  );
}
