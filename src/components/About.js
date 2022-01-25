import React from 'react';

//mui
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

import me from './images/me.png';

function About() {
  return (
    <Container id='aboutMe'
      component='section'
      sx={{
        fontFamily: 'Product Sans',
        fontStyle: 'normal',
        ml: { xs: 'auto', md: 'auto' },
      }}
    >
      <Typography
        gutterBottom
        component='h5'
        sx={{
          width: { xs: 'auto', md: '122px' },
          fontWeight: 'normal',
          fontSize: { xs: '16px', md: '24px' },
          lineHeight: { xs: '26px', md: '40px' },
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
          width: { xs: '162px', md: '275px' },

          fontWeight: 'bold',
          fontSize: { xs: '36px', md: '60px' },
          lineHeight: { xs: '44px', md: '73px' },
          color: '#d03c3c',
          mb: { xs: '4px', md: '4px' },
        }}
      >
        My Story
      </Typography>
      <Divider
        sx={{
          width: { xs: '66px', md: '113px' },

          backgroundColor: '#d03c3c',
          mb: { xs: '40px', md: '96px' },
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: { md: 'space-between' },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: { xs: '262px', md: '500px' },
            mx: { xs: 'auto' },
            order: { xs: 1, md: 2 },
          }}
        >
          <Box
            component='img'
            src={me}
            sx={{
              width: { xs: '238.42px', md: '225px', lg: '355px' },

              backgroundColor: '#d03c3c',
              borderRadius: {
                xs: '131px 131px 131px 131px',
                md: '500px  500px 500px 500px',
              },
            }}
          />
        </Box>
        <Box sx={{ order: { xs: 2, md: 1 } }}>
          <Typography
            gutterBottom
            component='h4'
            sx={{
              width: { xs: 'auto', md: 'auto' },

              fontWeight: 'normal',
              fontSize: { xs: '24px', md: '36px' },
              lineHeight: { xs: '29px', md: '44px' },
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
              width: { xs: 'auto', md: '572px' },

              fontWeight: 'normal',
              fontSize: { xs: '18px', md: '24px' },
              lineHeight: { xs: '30px', md: '40px' },
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
              width: { xs: '275px', md: '363px' },

              fontWeight: 'normal',
              fontSize: { xs: '24px', md: '36px' },
              lineHeight: { xs: '29px', md: '44px' },
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
              width: { xs: 'auto', md: '572px' },

              fontWeight: 'normal',
              fontSize: { xs: '18px', md: '24px' },
              lineHeight: { xs: '30px', md: '40px' },
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
              width: { xs: '275px', md: '363px' },

              fontWeight: 'normal',
              fontSize: { xs: '24px', md: '36px' },
              lineHeight: { xs: '29px', md: '44px' },
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
              width: { xs: 'auto', md: '572px' },

              fontWeight: 'normal',
              fontSize: { xs: '18px', md: '24px' },
              lineHeight: { xs: '30px', md: '40px' },
              color: '#414141',
              mb: { xs: '48px', md: '64px' },
            }}
          >
            I speak JavaScript. I write react.js, node.js, express, mongoDB
            (mongoose). Of course HTML, CSS, SASS, bootstrap, MUI, gatsby, redux
            etc
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default About;
