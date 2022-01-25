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
                fontWeight: 'normal',
                fontSize: { xs: '16px', md: '24px' },
                lineHeight: { xs: '19px', md: '40px' },
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
                fontWeight: 'bold',
                fontSize: { xs: '36px', md: '60px' },
                lineHeight: { xs: '44px', md: '73px' },
                color: '#d03c3c',
                mb: { xs: '4px', md: '4px' },
              }}
            >
              Articles
            </Typography>
            <Divider
              sx={{
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
                  <Box
                    component='article'
                    key={i}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mb: { xs: '48px', md: '67px' },
                      }}
                    >
                      <Typography
                        gutterBottom
                        component='h6'
                        sx={{
                          width: { xs: '242px', md: '616px' },
                          fontWeight: 'normal',
                          fontSize: { xs: '20px', md: '24px' },
                          lineHeight: { xs: '30px', md: '30px' },
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
