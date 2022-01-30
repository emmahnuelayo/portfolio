import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//mui
import Container from '@mui/material/Container';

//components
import Navbar from '../../components/Navbar';
import Home from '../../components/Home.js';
import Footer from '../../components/Footer.js';
import './index.css'

function App() {
  return (
    <Container
      maxWidth='xl'
      sx={{
        width: '100%',
        backgroundColor: '#ffffff',
      }}
    >
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
      <Footer/>
    </Container>
  );
}

export default App;
