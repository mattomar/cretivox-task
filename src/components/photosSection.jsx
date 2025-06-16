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
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null); // NEW
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const image4Ref = useRef(null);
  const image5Ref = useRef(null); // NEW
  const audioRef = useRef(new Audio(frankAudio));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = 0;
  
    const isPlayingRef = { current: false };
  
    const fadeInAudio = () => {
      if (!isPlayingRef.current) {
        audio.play().catch((err) => {
          console.warn('Audio play interrupted:', err);
        });
        isPlayingRef.current = true;
      }
      gsap.killTweensOf(audio, "volume"); // cancel existing fades
      gsap.to(audio, {
        volume: 1,
        duration: 2,
        ease: 'power1.inOut',
      });
    };
  
    const fadeOutAudio = () => {
      gsap.killTweensOf(audio, "volume");
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
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onEnter: fadeInAudio,
        onLeave: fadeOutAudio,
        onEnterBack: fadeInAudio,
        onLeaveBack: fadeOutAudio,
      });
  
      const imageAnimations = [
        [image1Ref, section1Ref],
        [image2Ref, section2Ref],
        [image3Ref, section3Ref],
        [image4Ref, section4Ref],
        [image5Ref, section5Ref],
      ];
  
      imageAnimations.forEach(([imageRef, sectionRef]) => {
        gsap.fromTo(
          imageRef.current,
          { x: '-210%' },
          {
            x: '180%',
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
              pin: true,
              markers: true,
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
        ref={section1Ref}
        sx={{
          height: '100vh',
          position: 'relative',
          backgroundColor: 'transparent',
          overflow: 'hidden',
        }}
      >
        {renderImageBox(image1Ref, meImage, 'the most important thing to me is my friends')}
      </Box>

      {/* Section 2 */}
      <Box
        ref={section2Ref}
        sx={{
          height: '100vh',
          position: 'relative',
          backgroundColor: 'transparent',
          overflow: 'hidden',
        }}
      >
        {renderImageBox(image2Ref, secondImage, 'FOODDDDD .......')}
      </Box>

      {/* Section 3 */}
      <Box
        ref={section3Ref}
        sx={{
          height: '100vh',
          position: 'relative',
          backgroundColor: 'transparent',
          overflow: 'hidden',
        }}
      >
        {renderImageBox(image3Ref, meImage, 'i love modeling')}
      </Box>

      {/* Section 4 */}
      <Box
        ref={section4Ref}
        sx={{
          height: '100vh',
          position: 'relative',
          backgroundColor: 'transparent',
          overflow: 'hidden',
        }}
      >
        {renderImageBox(image4Ref, meImage, 'my favorite artist is frank ocean')}
      </Box>

      {/* NEW: Section 5 */}
      <Box
        ref={section5Ref}
        sx={{
          height: '100vh',
          position: 'relative',
          backgroundColor: 'transparent',
          overflow: 'hidden',
        }}
      >
        {renderImageBox(image5Ref, secondImage, "i'm addicted to my phone but i love to clear my mind hiking")}
      </Box>

      {/* Optional scroll extension */}
      <Box sx={{ height: '1000px' }} />
    </Box>
  );
};

export default ScrollSection;