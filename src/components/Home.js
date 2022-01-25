import React from 'react';

//mui
import Container from '@mui/material/Container';
import Banner from './Banner';
import About from './About';
import Portfolio from './Portfolio';
import Articles from './Articles';
import Contact from './Contact';

function Home() {
  return (
    <Container component='main'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        m: '0px',
        p: '0px',
      }}
    >
      <Banner />
      <About />
      <Portfolio />
      <Articles />
      <Contact/>
    </Container>
  );
}

export default Home;
