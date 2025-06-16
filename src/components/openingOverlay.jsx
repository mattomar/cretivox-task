import { Box, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import React from 'react';
import openingBackground from '../assets/images/openingCd.jpg';

export default function OpeningOverlay() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null); // We'll animate this ref on a child Box

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
        overflow: 'hidden',
        zIndex: 10,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background div with CSS background image */}
      <Box
        ref={bgRef}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '80vw',
          height: '80vh',
          backgroundImage: `url(${openingBackground})`,
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          transform: 'translate(-50%, -50%) scale(1)',
          opacity: 0.25,
          zIndex: 0,
          pointerEvents: 'none',
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
