import React from 'react';

//mui
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



const theme = createTheme({
  palette: {
    brownCol: {
      main: '#d03c3c',
      contrastText: '#fff',
    },
  },
});

function Banner() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component='section'
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          pt: '3.375rem',
          fontFamily: 'Product Sans',
          fontStyle: 'normal',
          textAlign: 'center',
          mb: { xs: '8rem', md: '16rem' },
        }}
      >
        <Typography
          component='h5'
          gutterBottom
          sx={{
            fontFamily: 'Product Sans',
            fontStyle: 'normal',
            width: { xs: '202px', md: '252px' },
            fontWeight: 'normal',
            fontSize: { xs: '1rem', md: '1.25rem' },
            lineHeight: { xs: '1.5rem', md: '1.875rem' },
            color: '#414141',
            mb: { xs: '1.125rem', md: '1.5rem' },
          }}
        >
          Fullstack Developer, more like MERN stack
        </Typography>
        <Typography
          gutterBottom
          component='h6'
          sx={{
            fontFamily: 'Product Sans',
            fontStyle: 'normal',
            mx: { xs: '1.563rem', md: '16.063rem' },
            width: { xs: '310px', md: '726px' },
            fontWeight: 'bold',
            fontSize: { xs: '3rem', md: '4.5rem' },
            lineHeight: { xs: '3.625rem', md: '5.438rem' },
            color: '#121212',
            mb: { xs: '1rem', md: '2rem' },
          }}
        >
          Less talk, Show me the{` `}
          <Link
            href='https://github.com/emmahnuelayo'
            underline='hover'
            target='_blank'
            sx={{
              fontFamily: 'Product Sans',
              fontStyle: 'normal',
              color: '#D03C3C',
              textDecoration: 'none',
            }}
          >
            code
          </Link>
        </Typography>
        <Typography
          gutterBottom
          component='h6'
          sx={{
            fontFamily: 'Product Sans',
            fontStyle: 'normal',
            mx: { xs: '1.563rem', md: '20.25rem' },
            width: { xs: '310px', md: '792px' },
            fontWeight: 'normal',
            fontSize: { xs: '1.125rem', md: '1.875rem' },
            lineHeight: { xs: '1.75rem', md: '2.813rem' },
            color: '#414141',
            mb: { xs: '2rem', md: '4rem' },
          }}
        >
          &lt;code&gt;Hello <span role='img' aria-label='world'>&#127758;</span>&lt;/code&gt; I'm Emmanuel Fagbemide, a
          fullstack developer (MERN side of it) based in Lagos, Nigeria. I'm
          available to take your platform from just ideas to fast, responsive
          websites and web apps.
        </Typography>
        <Stack
          spacing={{ xs: 2, md: 4 }}
          direction={{ xs: 'column', md: 'row' }}
          sx={{
            fontFamily: 'Product Sans',
            fontStyle: 'normal',
            mx: { xs: '6.125rem', md: '32.063rem' },
          }}
        >
          <Button
            variant='contained'
            color='brownCol'
            sx={{
              fontFamily: 'Product Sans',
              fontStyle: 'normal',
              width: { xs: '10.25rem', md: '13.313rem' },
              height: { xs: '58px', md: '68px' },
            }}
            href='#myWorks'
          >
            View my work
          </Button>
          <Button
            variant='outlined'
            color='brownCol'
            sx={{
              fontFamily: 'Product Sans',
              fontStyle: 'normal',
              width: { xs: '164px', md: '213px' },
              height: { xs: '58px', md: '68px' },
            }}
            href='#hireMe'
          >
            Hire me
          </Button>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default Banner;
