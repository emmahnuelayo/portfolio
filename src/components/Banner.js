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
          pt: '54px',
          fontFamily: 'Product Sans',
          fontStyle: 'normal',
          textAlign: 'center',
          mb: { xs: '128px', md: '256px' },
        }}
      >
        <Typography
          component='h5'
          gutterBottom
          sx={{
            width: { xs: '202px', md: '252px' },
            fontWeight: 'normal',
            fontSize: { xs: '16px', md: '20px' },
            lineHeight: { xs: '150.3%', md: '30px' },
            color: '#414141',
            mb: { xs: '18px', md: '24px' },
          }}
        >
          Fullstack Developer, more like MERN stack
        </Typography>
        <Typography
          gutterBottom
          component='h6'
          sx={{
            mx: { xs: '25px', md: '257px' },
            width: { xs: '310px', md: '726px' },
            fontWeight: 'bold',
            fontSize: { xs: '48px', md: '72px' },
            lineHeight: { xs: '58px', md: '87px' },
            color: '#121212',
            mb: { xs: '16px', md: '32px' },
          }}
        >
          Less talk, Show me the{` `}
          <Link
            href='https://github.com/emmahnuelayo'
            underline='hover'
            target='_blank'
            sx={{ color: '#D03C3C', textDecoration: 'none' }}
          >
            code
          </Link>
        </Typography>
        <Typography
          gutterBottom
          component='h6'
          sx={{
            mx: { xs: '25px', md: '324px' },
            width: { xs: '310px', md: '792px' },
            fontWeight: 'normal',
            fontSize: { xs: '18px', md: '30px' },
            lineHeight: { xs: '28px', md: '45px' },
            color: '#414141',
            mb: { xs: '32px', md: '64px' },
          }}
        >
          &lt;code&gt;Hello &#127758;&lt;/code&gt; I'm Emmanuel Fagbemide, a
          fullstack developer (MERN side of it) based in Lagos, Nigeria. I'm
          available to take your platform from just ideas to fast, responsive
          websites and web apps.
        </Typography>
        <Stack
          spacing={{ xs: 2, md: 4 }}
          direction={{ xs: 'column', md: 'row' }}
          sx={{
            mx: { xs: '98px', md: '513px' },
          }}
        >
          <Button
            variant='contained'
            color='brownCol'
            sx={{
              width: { xs: '164px', md: '213px' },
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
