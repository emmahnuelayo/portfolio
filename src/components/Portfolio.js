import React from 'react';

//mui
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Query from './Query';
import PORTFOLIOS_QUERY from '../queries/portfolio/portfolios';

const theme = createTheme({
  palette: {
    brownCol: {
      main: '#d03c3c',
      contrastText: '#fff',
    },
  },
});

function Portfolio() {
  return (
    <ThemeProvider theme={theme}>
      <Query query={PORTFOLIOS_QUERY}>
        {({ data: { portfolios } }) => {
          return (
            <Container
              id='myWorks'
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
                  width: { xs: '92px', md: '122px' },
                  fontWeight: 'normal',
                  fontSize: { xs: '16px', md: '24px' },
                  lineHeight: { xs: '26px', md: '40px' },
                  color: '#414141',
                  mb: { xs: '4px', md: '4px' },
                }}
              >
                Portfolio
              </Typography>
              <Typography
                gutterBottom
                component='h5'
                sx={{
                  width: { xs: '342px', md: '423px' },

                  fontWeight: 'bold',
                  fontSize: { xs: '36px', md: '48px' },
                  lineHeight: { xs: '44px', md: '58px' },
                  color: '#d03c3c',
                  mb: { xs: '4px', md: '10px' },
                }}
              >
                Featured Work
              </Typography>
              <Divider
                sx={{
                  width: { xs: '112px', md: '180px' },
                  height: { xs: '5px', md: '5px' },
                  backgroundColor: '#d03c3c',
                  mb: { xs: '40px', md: '96px' },
                }}
              />
              <Grid container spacing={{ xs: 1, md: 0.5, lg: 2 }}>
                {portfolios.data.map((portfolio, i) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      md={6}
                      key={i}
                      sx={{ mb: { xs: '48px', md: '24px' }, justifyContent: 'space-around', display: 'flex' }}
                    >
                      <Card
                        sx={{
                          display: 'flex',
                          boxShadow: 'none',
                          border: 'none',
                          alignItems: 'center',
                        }}
                      >
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography
                              gutterBottom
                              variant='h5'
                              component='div'
                              sx={{
                                fontWeight: 'bold',
                                fontSize: { xs: '20px', md: '28px' },
                                lineHeight: { xs: '24px', md: '34px' },
                                color: '#212121',
                                letterSpacing: { xs: '0.01em' },
                                mb: { xs: '8px', md: '16px' },
                              }}
                            >
                              {portfolio.attributes.portfolioTitle}
                            </Typography>
                            <Typography
                              gutterBottom
                              variant='body2'
                              component='h6'
                              sx={{
                                fontWeight: 'normal',
                                fontSize: { xs: '14px', md: '18px' },
                                lineHeight: { xs: '21px', md: '27px' },
                                color: '#212121',
                                letterSpacing: { xs: '0.01em' },
                              }}
                            >
                              {portfolio.attributes.portfolioDescription}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button
                              href={`http://${portfolio.attributes.portfolioLink}`}
                              size='small'
                              color='brownCol'
                              style={{
                                fontWeight: { xs: 'bold' },
                                fontSize: { xs: '12px' },
                                lineHeight: { xs: '19px', md: '20px' },
                              }}
                            >
                              Visit Site
                              <ArrowForwardIcon />
                            </Button>
                          </CardActions>
                        </Box>
                        <CardMedia
                          component='img'
                          sx={{
                            width: { xs: '112px', md: '204px' },
                            height: { xs: '90.99px', md: '164px' },
                          }}
                          image={portfolio.attributes.portfolioImg.data.attributes.url}
                          alt={portfolio.attributes.portfolioTitle}
                        />
                      </Card>
              
                    </Grid>
                  );
                })}
              </Grid>
            </Container>
          );
        }}
      </Query>
    </ThemeProvider>
  );
}

export default Portfolio;
