import React, { useState, useEffect } from 'react';
import OpeningOverlay from '../components/overlays/OpeningOverlay';
import AboutMe from '../components/sections/AboutMe';

export default function HomePage() {
  const [showOpening, setShowOpening] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOpening(false);
    }, 3600); // Adjust duration as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showOpening && <OpeningOverlay />}
      {!showOpening && <AboutMe />}
    </>
  );
}
