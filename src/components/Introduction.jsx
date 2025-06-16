import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import meImage from '../assets/images/me.jpg';
import meImage2 from '../assets/images/me2.jpg';

gsap.registerPlugin(ScrollTrigger);

const IntroductionPage = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const floatingTextRef = useRef(null);

  useEffect(() => {
    // Floating text scrolls down into view
    gsap.to(floatingTextRef.current, {
      y: 300, // distance to move down
      opacity: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: floatingTextRef.current,
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Animate image and text on scroll
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
      }
    });

    timeline
      .fromTo(
        imageRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' }
      )
      .fromTo(
        textRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' },
        '<0.3'
      );
  }, []);

  return (
    <Box>
      {/* Div 1 */}
      <Box
        sx={{
          height: '50vh',
          backgroundImage: `url(${meImage2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Div 2 (floating text) */}
      <Box
  sx={{
    height: '30vh',
    background: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  }}
>
  <Box
    ref={floatingTextRef}
    sx={{
      fontSize: '2.5rem',
      fontWeight: '600',
      color: 'white', // ✅ fixed
      fontFamily: 'La Cerchia',
    }}
  >
    Scroll Down
  </Box>
</Box>
      {/* Div 3 (main content animation) */}
      <Box
        sx={{
          height: '100vh',
          backgroundColor: 'none',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          padding: 2,
          overflow: 'hidden',
        }}
      >
        <Box
          ref={imageRef}
          sx={{
            width: '50%',
            height: '100%',
            backgroundImage: `url(${meImage})`,
            backgroundSize: 'cover',
            borderRadius: '8px',
            opacity: 0,
          }}
        />
        <Box
          ref={textRef}
          sx={{
            maxWidth: '40%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            opacity: 0,
            marginLeft: 4,
          }}
        >
          <Box
            component="h1"
            sx={{
              fontFamily: 'Moonscape',
              fontSize: '3rem',
              fontWeight: '700',
              marginBottom: 2,
            }}
          >
            Matt Omar
          </Box>
          <Box
            component="p"
            sx={{
              fontSize: '1.25rem',
              color: '#555',
            }}
          >
            I'm a full stack developer who started coding back in 2020.
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default IntroductionPage;