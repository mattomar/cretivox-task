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
  const topImageRef = useRef(null);

  useEffect(() => {
    gsap.to(floatingTextRef.current, {
      y: 300,
      opacity: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: floatingTextRef.current,
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to(topImageRef.current, {
      backgroundPositionY: '0%',
      ease: 'none',
      scrollTrigger: {
        trigger: topImageRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

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
        { x: -100, opacity: 0, filter: 'blur(20px)' },
        { x: 0, opacity: 1, filter: 'blur(0px)', ease: 'power2.out' }
      )
      .fromTo(
        textRef.current,
        { x: -100, opacity: 0, filter: 'blur(20px)' },
        { x: 0, opacity: 1, filter: 'blur(0px)', ease: 'power2.out' },
        '<0.3'
      );
  }, []);

  return (
    <Box>
      {/* Div 1 — Top background image scrolls up */}
      <Box
        ref={topImageRef}
        sx={{
          height: '50vh',
          backgroundImage: `url(${meImage2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 60%',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Div 2 — Floating scroll prompt */}
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
            color: 'white',
            fontFamily: 'La Cerchia',
          }}
        >
          Scroll Down
        </Box>
      </Box>

      {/* Div 3 — Image and intro text */}
      <Box
        sx={{
          height: '100vh',
          backgroundColor: 'none',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: 4,
          overflow: 'hidden',
          gap: 6,
        }}
      >
        <Box
          ref={imageRef}
          sx={{
            width: '50%',
            height: '100%',
            backgroundImage: `url(${meImage})`,
            backgroundSize: 'cover',
            backgroundPosition: {
              xs: '30% center',
              md: 'center',
            },
            borderRadius: '10px',
            filter: 'blur(20px)', // initial blur
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
            filter: 'blur(20px)', // initial blur
            color: '#f5f5f5',
          }}
        >
          <Box
            component="h1"
            sx={{
              fontFamily: 'Moonscape',
              fontSize: '3.5rem',
              fontWeight: '700',
              marginBottom: 3,
            }}
          >
            Matt Omar
          </Box>
          <Box
            component="p"
            sx={{
              fontSize: '1.5rem',
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            I'm Matt, a 22-year-old developer. I began coding in 2020 and have been building full-stack web applications ever since. My passion lies in blending design with function—crafting interfaces that not only work well but feel meaningful. I'm currently focused on creating engaging digital experiences that reflect personality, purpose, and presence.
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default IntroductionPage;