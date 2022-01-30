import React from 'react';

//mui
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

import me from './images/me.jpg';

function About() {
  return (
    <Container
      id='aboutMe'
      component='section'
      sx={{
        fontFamily: 'Product Sans',
        fontStyle: 'normal',
        ml: { xs: 'auto', md: 'auto' },
        mb: { xs: '100px', md: '200px' },
      }}
    >
      <Typography
        gutterBottom
        component='h5'
        sx={{
          fontFamily: 'Product Sans',
          fontStyle: 'normal',
          width: { xs: 'auto', md: '122px' },
          fontWeight: 'normal',
          fontSize: { xs: '1rem', md: '1.5rem' },
          lineHeight: { xs: '1.625rem', md: '2.5rem' },
          color: '#414141',
          mb: { xs: '4px', md: '4px' },
        }}
      >
        Meet Me
      </Typography>
      <Typography
        gutterBottom
        component='h5'
        sx={{
          fontFamily: 'Product Sans',
          fontStyle: 'normal',
          width: { xs: '162px', md: '275px' },

          fontWeight: 'bold',
          fontSize: { xs: '2.25rem', md: '3.75rem' },
          lineHeight: { xs: '2.75rem', md: '4.563rem' },
          color: '#d03c3c',
          mb: { xs: '4px', md: '4px' },
        }}
      >
        My Story
      </Typography>
      <Divider
        sx={{
          fontFamily: 'Product Sans',
          fontStyle: 'normal',
          width: { xs: '66px', md: '113px' },
          height: { xs: '5px', md: '5px' },
          backgroundColor: '#d03c3c',
          mb: { xs: '40px', md: '96px' },
        }}
      />
      <Box
        sx={{
          fontFamily: 'Product Sans',
          fontStyle: 'normal',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: { md: 'space-between' },
        }}
      >
        <Box
          sx={{
            fontFamily: 'Product Sans',
            fontStyle: 'normal',
            position: 'relative',
            width: { xs: '262px', md: '380px', lg: '682px' },
            mt: { md: '100px' },
            mx: { xs: 'auto' },
            mb: { xs: '3.681rem', md: '0' },
            order: { xs: 1, md: 2 },
            height: { xs: '262px', md: '380px', lg: '682px' },
            overflow: 'hidden',
            borderRadius: {
              xs: '50%',
              md: '50%',
            },
            display: { md: 'flex' },
            alignItems: { md: 'center' },
            justifyContent: { md: 'center' },
          }}
        >
          <Box
            component='img'
            src={me}
            sx={{
              fontFamily: 'Product Sans',
              fontStyle: 'normal',

              backgroundColor: '#d03c3c',
              width: '100%',
              height: 'auto',
            }}
          />
        </Box>
        <Box sx={{ order: { xs: 2, md: 1 } }}>
          <Typography
            gutterBottom
            component='h4'
            sx={{
              fontFamily: 'Product Sans',
              fontStyle: 'normal',
              width: { xs: 'auto', md: '400px' },

              fontWeight: 'normal',
              fontSize: { xs: '1.5rem', md: '2.25rem' },
              lineHeight: { xs: '1.813rem', md: '2.75rem' },
              color: '#212121',
              mb: { xs: '16px', md: '24px' },
            }}
          >
            Brief Description
          </Typography>
          <Typography
            gutterBottom
            component='h6'
            sx={{
              fontFamily: 'Product Sans',
              fontStyle: 'normal',
              width: { xs: 'auto', md: '400px' },

              fontWeight: 'normal',
              fontSize: { xs: '1.125rem', md: '1.5rem' },
              lineHeight: { xs: '1.875rem', md: '2.5rem' },
              color: '#414141',
              mb: { xs: '48px', md: '64px' },
            }}
          >
            Just incase you missed the header, I'm Emmanuel Fagbemide. A
            fullstack web developer with a focus on the MERN stack. I'm
            self-taught. I've gone through tonnes of materials on youtube,
            freecodecamp, udemy just to ensure I can deliver optimum result.
          </Typography>
          <Typography
            gutterBottom
            component='h4'
            sx={{
              fontFamily: 'Product Sans',
              fontStyle: 'normal',
              width: { xs: '275px', md: '400px' },

              fontWeight: 'normal',
              fontSize: { xs: '1.5rem', md: '2.25rem' },
              lineHeight: { xs: '1.813rem', md: '2.75rem' },
              color: '#212121',
              mb: { xs: '16px', md: '24px' },
            }}
          >
            Education
          </Typography>
          <Typography
            gutterBottom
            component='h6'
            sx={{
              fontFamily: 'Product Sans',
              fontStyle: 'normal',
              width: { xs: 'auto', md: '400px' },

              fontWeight: 'normal',
              fontSize: { xs: '1.125rem', md: '1.5rem' },
              lineHeight: { xs: '1.875rem', md: '2.5rem' },
              color: '#414141',
              mb: { xs: '48px', md: '64px' },
            }}
          >
            Formally, I got a bachelors degree in mechanical engineering from
            the university of Lagos. Trust me education doesn't end in the
            classroom, so I have got certificates from different online learning
            platforms.
          </Typography>
          <Typography
            gutterBottom
            component='h4'
            sx={{
              fontFamily: 'Product Sans',
              fontStyle: 'normal',
              width: { xs: '275px', md: '400px' },

              fontWeight: 'normal',
              fontSize: { xs: '1.5rem', md: '2.25rem' },
              lineHeight: { xs: '1.813rem', md: '2.75rem' },
              color: '#212121',
              mb: { xs: '16px', md: '24px' },
            }}
          >
            Skills
          </Typography>
          <Typography
            gutterBottom
            component='h6'
            sx={{
              fontFamily: 'Product Sans',
              fontStyle: 'normal',
              width: { xs: 'auto', md: '400px' },

              fontWeight: 'normal',
              fontSize: { xs: '18px', md: '24px' },
              lineHeight: { xs: '30px', md: '40px' },
              color: '#414141',
            }}
          >
            I speak JavaScript. I write react.js, node.js, express. I also have
            a solid grasp of HTML, CSS, SASS, bootstrap, MUI, gatsby, redux,
            mongoDB (mongoose), etc
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default About;
