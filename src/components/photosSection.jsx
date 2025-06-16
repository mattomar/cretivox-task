import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import meImage from '../assets/images/me.jpg';

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: '-210%' },
        {
          x: '180%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 20*', // (keeping exactly as you wrote, even though it's likely a typo)
            end: '+=1000',
            scrub: true,
            pin: true,
            markers: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        height: '100vh',
        position: 'relative',
        backgroundColor: 'transparent',
        overflow: 'hidden',
      }}
    >
      <Box
        ref={imageRef}
        sx={{
          width: '600px',
          height: '400px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Box
          component="img"
          src={meImage}
          alt="Sliding Image"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '-10%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '1.5rem',
            textAlign: 'center',
            fontWeight: 'bold',
            textShadow: '0 0 10px rgba(0,0,0,0.6)',
            pointerEvents: 'none',
          }}
        >
          the most important thing to me is my friends
        </Box>
      </Box>
    </Box>
  );
};

export default ScrollSection;
