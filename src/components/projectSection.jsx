import React, { useRef, useEffect } from 'react';
import { Box, Typography, Button, Card, CardContent, CardActions } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'file upload',
    description: 'A personal portfolio showcasing my work and design skills.',
    liveLink: 'https://fileuploader-psi.vercel.app/',
    githubLink: 'https://github.com/mattomar/fileuploader',
  },
  {
    title: 'members only',
    description: 'A sleek and powerful todo app built with React and Firebase.',
    liveLink: 'https://club-members.vercel.app/',
    githubLink: 'https://github.com/mattomar/club-members',
  },
  {
    title: 'pokemon inventory',
    description: 'Real-time weather tracking app using OpenWeatherMap API.',
    liveLink: 'https://pokemon-tan-tau.vercel.app/',
    githubLink: 'https://github.com/mattomar/pokemon',
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.project-card');

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          delay: i * 0.2,
        }
      );
    });
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        minHeight: '50vh',
        backgroundColor: '#111',
        color: '#fff',
        px: 4,
        py: 8,
      }}
    >
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
        My Projects
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 4,
          mt: 4,
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            className="project-card"
            sx={{
              width: 300,
              backgroundColor: '#1e1e1e',
              borderRadius: 4,
              boxShadow: 4,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
              },
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#90caf9' }}>
                {project.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: '#ccc' }}>
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: '#64ffda' }}
              >
                Live
              </Button>
              <Button
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: '#64ffda' }}
              >
                GitHub
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ProjectsSection;
