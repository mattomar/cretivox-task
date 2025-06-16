import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import footSteps from '../assets/images/footSteps.png';

gsap.registerPlugin(ScrollTrigger);

const MoreInfo = () => {
  const headerRef = useRef(null);
  const stepsRowRef = useRef(null);

  useEffect(() => {
    // Animate header
    gsap.fromTo(
      headerRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 90%',
          end: 'top 60%',
          scrub: true,
        },
      }
    );

    // Horizontal reveal of footsteps
    gsap.fromTo(
      stepsRowRef.current,
      { clipPath: 'inset(0 100% 0 0)' }, // fully hidden (from right)
      {
        clipPath: 'inset(0 0% 0 0)',     // fully revealed (from left to right)
        ease: 'none',
        scrollTrigger: {
          trigger: stepsRowRef.current,
          start: 'top 95%',
          end: 'top 20%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      {/* Section 1: Header */}
      <Box sx={{ height: '10vh', p: 4 }}>
        <Box
          ref={headerRef}
          sx={{
            fontFamily: 'Moonscape',
            fontSize: '3rem',
            fontWeight: '700',
            textAlign: 'center',
            color: 'white',
            mb: 10,
          }}
        >
          Let's take a walk in my mind
        </Box>
      </Box>

      {/* Section 2: Horizontal footsteps reveal */}
      <Box
  sx={{
    height: '20vh',
    display: 'flex',
    alignItems: 'flex-start', // align to top
    justifyContent: 'center', // horizontally centered
    pt: '30vh', // push it down slightly from the top
  }}
>
  <Box
    ref={stepsRowRef}
    sx={{
      display: 'flex',
      gap: 4,
      overflow: 'hidden',
      clipPath: 'inset(0 100% 0 0)',
    }}
  >
    {Array.from({ length: 10 }).map((_, i) => (
      <Box
        key={i}
        component="img"
        src={footSteps}
        alt={`Step ${i + 1}`}
        sx={{
          width: '140px', // bigger footsteps
          height: 'auto',
          opacity: 0.9,
        }}
      />
    ))}
  </Box>
</Box>

    </>
  );
};

export default MoreInfo;