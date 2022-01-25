import React from 'react';

//mui
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';

const theme = createTheme({
  palette: {
    brownCol: {
      main: '#d03c3c',
      contrastText: '#fff',
    },
  },
});

function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component='footer'
        sx={{
          mt: { xs: '96px', md: '214px' },
          mb: { xs: '22px', md: '52px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          fontFamily: 'Product Sans',
          fontStyle: 'normal',
          textAlign: 'center',
        }}
      >
        <Typography
          component='h5'
          gutterBottom
          sx={{
            fontWeight: 'normal',
            fontSize: { xs: '16px', md: '20px' },
            lineHeight: { xs: '150.3%', md: '30px' },
            color: '#414141',
            mb: { xs: '18px', md: '24px' },
            mr: { xs: '9.5px', md: '18px' },
          }}
        >
          Love and Light
        </Typography>
        <FavoriteIcon
          color='brownCol'
          sx={{
            fontSize: { xs: '16px', md: '20px' },
            lineHeight: { xs: '150.3%', md: '30px' },
            mb: { xs: '18px', md: '24px' },
          }}
        />
      </Box>
    </ThemeProvider>
  );
}

export default Footer;
