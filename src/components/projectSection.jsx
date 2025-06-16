import React, { useRef, useEffect } from 'react';
import { Box, Typography, Button, Card, CardContent, CardActions } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'File Upload',
    description: 'A clean and simple file upload web app with drag-and-drop and progress tracking.',
    liveLink: 'https://fileuploader-psi.vercel.app/',
    githubLink: 'https://github.com/mattomar/fileuploader',
  },
  {
    title: 'Members Only',
    description: 'A private message board for registered users—built with authentication and role-based access.',
    liveLink: 'https://club-members.vercel.app/',
    githubLink: 'https://github.com/mattomar/club-members',
  },
  {
    title: 'Pokemon Inventory',
    description: 'A playful app for managing and displaying a list of Pokémon with search and stats view.',
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
        backgroundColor: '#0f0f0f',
        color: '#fff',
        px: { xs: 2, md: 6 },
        py: 10,
      }}
    >
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '2.5rem' } }}
      >
        My Projects
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 6,
          mt: 6,
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            className="project-card"
            sx={{
              width: 320,
              backgroundColor: '#1b1b1b',
              borderRadius: 4,
              boxShadow: 6,
              p: 2,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: 10,
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  fontSize: '1.3rem',
                  color: '#90caf9',
                  mb: 1,
                }}
              >
                {project.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#e0e0e0',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                }}
              >
                {project.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ mt: 1, pl: 1 }}>
              <Button
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: '#64ffda', fontWeight: 500 }}
              >
                Live
              </Button>
              <Button
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: '#64ffda', fontWeight: 500 }}
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
