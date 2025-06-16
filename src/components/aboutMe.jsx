import React from 'react';
import IntroductionPage from './Introduction';
import MoreInfo from './moreInfor';
import ScrollAnimation from './photosSection';
export default function AboutMe() {
  return (
    <div>
      <IntroductionPage />
      <MoreInfo />
      <ScrollAnimation />
    </div>
  );
}