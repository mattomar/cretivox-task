import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import frankAudio from '../assets/images/frank.mp3';
import frankImage from '../assets/images/frank.jpg';
import friendsImage from '../assets/images/friends.jpg';
import hikeImage from '../assets/images/hike.jpg';
import modelVideo from '../assets/images/model.mov';
import editingVideo from '../assets/images/editing.mov';

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = () => {
  const wrapperRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const videoRef = useRef(null);
  const image4Ref = useRef(null);
  const image5Ref = useRef(null);

  const audioRef = useRef(new Audio(frankAudio));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = 0;
    const isPlayingRef = { current: false };

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
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onEnter: fadeInAudio,
        onLeave: fadeOutAudio,
        onEnterBack: fadeInAudio,
        onLeaveBack: fadeOutAudio,
      });

      gsap.fromTo(image1Ref.current, { x: '-220%' }, {
        x: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: section1Ref.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 3,
          pin: true,
        },
      });

      gsap.fromTo(image2Ref.current, { x: '-320%' }, {
        x: '190%',
        ease: 'none',
        scrollTrigger: {
          trigger: section2Ref.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 3,
          pin: true,
        },
      });

      gsap.fromTo(videoRef.current, { x: '-350%' }, {
        x: '230%',
        ease: 'none',
        scrollTrigger: {
          trigger: section3Ref.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 3,
          pin: true,
        },
      });

      gsap.fromTo(image4Ref.current, { x: '-250%' }, {
        x: '130%',
        ease: 'none',
        scrollTrigger: {
          trigger: section4Ref.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 3,
          pin: true,
        },
      });

      gsap.fromTo(image5Ref.current, { x: '-230%' }, {
        x: '170%',
        ease: 'none',
        scrollTrigger: {
          trigger: section5Ref.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 3,
          pin: true,
        },
      });
    });

    return () => {
      gsap.killTweensOf(audio);
      audio.pause();
      audio.currentTime = 0;
      ctx.revert();
    };
  }, []);

  const renderImageBox = (ref, imgSrc, text, scale = 1) => (
    <Box
      ref={ref}
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '100%',
        maxHeight: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        component="img"
        src={imgSrc}
        alt="Sliding Image"
        sx={{
          display: 'block',
          width: 'auto',
          height: 'auto',
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'cover',
          transform: `scale(${scale})`,
          transformOrigin: 'center',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: ref === image1Ref ? '30%' : '100%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: ref === image1Ref
            ? { xs: '1.2rem', sm: '1.5rem', md: '2rem', lg: '3rem', xl: '4rem' }
            : 'clamp(1rem, 2.5vw, 2rem)',
          textAlign: 'center',
          fontFamily: 'La Cerchia',
          fontWeight: 'bold',
          textShadow: '0 0 20px rgba(0,0,0,0.7)',
          pointerEvents: 'none',
        }}
      >
        {text}
      </Box>
    </Box>
  );

  return (
    <Box ref={wrapperRef}>
      <Box ref={section1Ref} sx={sectionStyle}>
        {renderImageBox(image1Ref, friendsImage, 'they’re the only ones who make this place feel less quiet')}
      </Box>

      <Box ref={section2Ref} sx={sectionStyle}>
        <Box
          ref={image2Ref}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) scale(1.5)',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        >
          <video
            src={editingVideo}
            autoPlay
            loop
            muted
            playsInline
            style={{
              display: 'block',
              width: 'auto',
              height: 'auto',
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'cover',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '45%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontSize: 'clamp(1rem, 2vw, 1rem)',
              textAlign: 'center',
              fontWeight: 'bold',
              textShadow: '0 0 20px rgba(0,0,0,0.7)',
              pointerEvents: 'none',
            }}
          >
            i cut my days into scenes — maybe they’ll make sense when it’s all edited
          </Box>
        </Box>
      </Box>

      <Box ref={section3Ref} sx={sectionStyle}>
        <Box
          ref={videoRef}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        >
          <video
            src={modelVideo}
            autoPlay
            loop
            muted
            playsInline
            style={{
              display: 'block',
              width: 'auto',
              height: 'auto',
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'cover',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontSize: 'clamp(1rem, 2.5vw, 2rem)',
              textAlign: 'center',
              fontWeight: 'bold',
              textShadow: '0 0 20px rgba(0,0,0,0.7)',
              pointerEvents: 'none',
            }}
          >
            i used to feel invisible now i let them look
          </Box>
        </Box>
      </Box>

      <Box ref={section4Ref} sx={sectionStyle}>
  {renderImageBox(image4Ref, frankImage, 'frank says it in a way i never could,but always feel', 0.75, '40%')}
</Box>

<Box ref={section5Ref} sx={sectionStyle}>
  {renderImageBox(image5Ref, hikeImage, 'i scroll till i’m numb, then go outside to remember i’m real', 0.75, '40%')}
</Box>

      <Box sx={{ height: '1000px' }} />
    </Box>
  );
};

const sectionStyle = {
  height: '100vh',
  position: 'relative',
  backgroundColor: 'transparent',
  overflow: 'hidden',
};

export default ScrollSection;