import React, { useState, useEffect } from 'react';
import OpeningOverlay from '../components/openingOverlay';
import AboutMe from '../components/aboutMe';

export default function HomePage() {
  const [stage, setStage] = useState('opening'); // 'opening' | 'about'

  useEffect(() => {
    const timer = setTimeout(() => {
      setStage('about');
    }, 3600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {stage === 'opening' && <OpeningOverlay />}
      {stage === 'about' && <AboutMe />}
    </>
  );
}
