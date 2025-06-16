import React from 'react';
import IntroductionPage from './Introduction';
import MoreInfo from './moreInfor';
import ScrollAnimation from './photosSection';
import ProjectsSection from './projectSection';
export default function AboutMe() {
  return (
    <div>
      <IntroductionPage />
      <MoreInfo />
      <ScrollAnimation />
      <ProjectsSection />
    </div>
  );
}