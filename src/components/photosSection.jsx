import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import meImage from '../assets/images/me.jpg';
import secondImage from '../assets/images/me2.jpg';
import frankAudio from '../assets/images/frank.mp3';

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = () => {
  const wrapperRef = useRef(null);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const imageRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const audioRef = useRef(new Audio(frankAudio));
  const isPlayingRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = 0;

    const fadeInAudio = () => {
      if (!isPlayingRef.current) {
        audio.play().catch((err) => console.warn('Audio play error:', err));
        isPlayingRef.current = true;
      }
      gsap.killTweensOf(audio, 'volume');
      gsap.to(audio, {
        volume: 1,
        duration: 2,
        ease: 'power1.inOut',
      });
    };

    const fadeOutAudio = () => {
      gsap.killTweensOf(audio, 'volume');
      gsap.to(audio, {
        volume: 0,
        duration: 2,
        ease: 'power1.inOut',
        onComplete: () => {
          if (isPlayingRef.current) {
            audio.pause();
            audio.currentTime = 0;
            isPlayingRef.current = false;
          }
        },
      });
    };

    const ctx = gsap.context(() => {
      // Audio trigger for the entire wrapper
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onEnter: fadeInAudio,
        onLeave: fadeOutAudio,
        onEnterBack: fadeInAudio,
        onLeaveBack: fadeOutAudio,
      });

      // Image scroll animations
      sectionRefs.forEach((sectionRef, index) => {
        gsap.fromTo(
          imageRefs[index].current,
          { x: '-210%' },
          {
            x: '180%',
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: '+=100%',
              scrub: true,
              pin: index < sectionRefs.length - 1, // Only pin if not the last section
              markers: false,
            },
          }
        );
      });
    });

    return () => {
      gsap.killTweensOf(audio);
      audio.pause();
      audio.currentTime = 0;
      isPlayingRef.current = false;
      ctx.revert();
    };
  }, []);

  const renderImageBox = (ref, imgSrc, text) => (
    <Box
      ref={ref}
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
        src={imgSrc}
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
        {text}
      </Box>
    </Box>
  );

  return (
    <Box ref={wrapperRef}>
      {/* Section 1 */}
      <Box
        ref={sectionRefs[0]}
        sx={{
          height: '100vh',
          position: 'relative',
          backgroundColor: 'transparent',
          overflow: 'hidden',
        }}
      >
        {renderImageBox(imageRefs[0], meImage, 'the most important thing to me is my friends')}
      </Box>

      {/* Section 2 */}
      <Box
        ref={sectionRefs[1]}
        sx={{
          height: '100vh',
          position: 'relative',
          backgroundColor: 'transparent',
          overflow: 'hidden',
        }}
      >
        {renderImageBox(imageRefs[1], secondImage, 'FOODDDDD .......')}
      </Box>

      {/* Section 3 */}
      <Box
        ref={sectionRefs[2]}
        sx={{
          height: '100vh',
          position: 'relative',
          backgroundColor: 'transparent',
          overflow: 'hidden',
        }}
      >
        {renderImageBox(imageRefs[2], meImage, 'i love modeling')}
      </Box>

      {/* Section 4 */}
      <Box
        ref={sectionRefs[3]}
        sx={{
          height: '100vh',
          position: 'relative',
          backgroundColor: 'transparent',
          overflow: 'hidden',
        }}
      >
        {renderImageBox(imageRefs[3], meImage, 'my favorite artist is frank ocean')}
      </Box>

      {/* Section 5 */}
      <Box
        ref={sectionRefs[4]}
        sx={{
          height: '100vh',
          position: 'relative',
          backgroundColor: 'transparent',
          overflow: 'hidden',
        }}
      >
        {renderImageBox(imageRefs[4], secondImage, "i'm addicted to my phone but i love to clear my mind hiking")}
      </Box>
    </Box>
  );
};

export default ScrollSection;
