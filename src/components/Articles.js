import React from 'react';

//mui
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Link from '@mui/material/Link';

import Query from './Query';
import ARTICLES_QUERY from '../queries/article/articles';

function Articles() {
  return (
    <Query query={ARTICLES_QUERY}>
      {({ data: { articles } }) => {
        return (
          <Container
            id='articles'
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
                fontWeight: 'normal',
                fontSize: { xs: '1rem', md: '1.5rem' },
                lineHeight: { xs: '1.188rem', md: '2.5rem' },
                color: '#414141',
                mb: { xs: '4px', md: '4px' },
              }}
            >
              As e dey hot
            </Typography>
            <Typography
              gutterBottom
              component='h5'
              sx={{
                fontFamily: 'Product Sans',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: { xs: '2.25rem', md: '3.75rem' },
                lineHeight: { xs: '2.813rem', md: '4.563rem' },
                color: '#d03c3c',
                mb: { xs: '4px', md: '4px' },
              }}
            >
              Articles
            </Typography>
            <Divider
              sx={{
                fontFamily: 'Product Sans',
                fontStyle: 'normal',
                width: { xs: '66px', md: '108px' },
                height: { xs: '5px', md: '5px' },
                backgroundColor: '#d03c3c',
                mb: { xs: '64px', md: '96px' },
              }}
            />
            <Divider
              sx={{
                width: { xs: '80vw', md: '80vw' },
                height: { xs: '0px', md: '0px' },
                mb: { xs: '51px', md: '67px' },
                border: '1px solid rgba(0, 0, 0, 0.12)',
              }}
            />
            <Box component='section'>
              {articles.data.map((article, i) => {
                return (
                  <Box component='article' key={i}>
                    <Box
                      sx={{
                        fontFamily: 'Product Sans',
                        fontStyle: 'normal',
                        display: 'flex',
                        justifyContent: 'space-between',
                        mb: { xs: '48px', md: '67px' },
                      }}
                    >
                      <Typography
                        gutterBottom
                        component='h6'
                        sx={{
                          fontFamily: 'Product Sans',
                          fontStyle: 'normal',
                          width: { xs: '242px', md: '616px' },
                          fontWeight: 'normal',
                          fontSize: { xs: '1.25rem', md: '1.5rem' },
                          lineHeight: { xs: '1.516rem', md: '1.875rem' },
                          color: '#212121',
                        }}
                      >
                        {article.attributes.articleTitle}
                      </Typography>
                      <Link
                        href={`http://${article.attributes.articleLink}`}
                        target='_blank'
                      >
                        <ArrowForwardIcon
                          sx={{
                            width: { xs: '30px', md: '42px' },
                            height: { xs: '30px', md: '42px' },
                            backgroundColor: '#d03c3c',
                            borderRadius: { xs: '30px', md: '42px' },
                            color: '#fff',
                          }}
                        />
                      </Link>
                    </Box>
                    <Divider
                      sx={{
                        width: { xs: '80vw', md: '80vw' },
                        height: { xs: '0px', md: '0px' },
                        mb: { xs: '51px', md: '67px' },
                        border: '1px solid rgba(0, 0, 0, 0.12)',
                      }}
                    />
                  </Box>
                );
              })}
            </Box>
          </Container>
        );
      }}
    </Query>
  );
}

export default Articles;
