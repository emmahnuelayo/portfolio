import React, { Component } from 'react';
import emailjs from '@emailjs/browser';

//mui
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from '@mui/material/Link';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const theme = createTheme({
  palette: {
    brownCol: {
      main: '#d03c3c',
      contrastText: '#fff',
    },
  },
});

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueInput: '',
      valueTextArea: 'Please drop your message here....',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeTextArea = this.handleChangeTextArea.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      valueInput: event.target.value,
    });
  }

  handleChangeTextArea(event) {
    this.setState({
      valueTextArea: event.target.value,
    });
  }

  clearFields() {
    this.setState({
      valueInput: '',
      valueTextArea: 'Please drop your message here....',
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        event.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          alert('Message sent, I will get back to you shortly.', result.text);
        },
        (error) => {
          alert('An error occurred, Please try again', error.text);
        }
      );
    this.setState({
      valueInput: '',
      valueTextArea: 'Please drop your message here....',
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container
          component='section'
          id='hireMe'
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
              width: { xs: '131px', md: '163px' },
              fontWeight: 'normal',
              fontSize: { xs: '16px', md: '20px' },
              lineHeight: { xs: '26px', md: '33px' },
              color: '#414141',
              mb: { xs: '4px', md: '4px' },
            }}
          >
            Let's talk more
          </Typography>
          <Typography
            gutterBottom
            component='h5'
            sx={{
              width: { xs: '271px', md: '441px' },
              fontWeight: 'bold',
              fontSize: { xs: '30px', md: '60px' },
              lineHeight: { xs: '36px', md: '73px' },
              color: '#d03c3c',
              mb: { xs: '4px', md: '4px' },
            }}
          >
            Get in Touch
          </Typography>
          <Divider
            sx={{
              width: { xs: '86px', md: '180px' },
              height: { xs: '5px', md: '5px' },
              backgroundColor: '#d03c3c',
              mb: { xs: '64px', md: '64px' },
            }}
          />
          <Grid
            container
            spacing={3}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
            }}
          >
            <Grid item xs={12} md={6} sx={{ mb: { xs: '48px', md: '24px' } }}>
              <Typography
                gutterBottom
                component='h5'
                sx={{
                  width: { xs: '260px', md: '340px' },
                  fontWeight: 'normal',
                  fontSize: { xs: '24px', md: '36px' },
                  lineHeight: { xs: '29px', md: '44px' },
                  color: '#121212',
                  mb: { xs: '16px', md: '24px' },
                }}
              >
                Contact Details
              </Typography>
              <Typography
                gutterBottom
                component='h6'
                sx={{
                  width: { xs: '363px', md: '392px' },
                  fontWeight: 'normal',
                  fontSize: { xs: '18px', md: '20px' },
                  lineHeight: { xs: '30px', md: '33px' },
                  color: '#414141',
                  mb: { xs: '8px', md: '16px' },
                }}
              >
                emmanuelayomide97@gmail.com
              </Typography>
              <Typography
                gutterBottom
                component='h6'
                sx={{
                  width: { xs: '267px', md: '285px' },
                  fontWeight: 'normal',
                  fontSize: { xs: '18px', md: '20px' },
                  lineHeight: { xs: '30px', md: '33px' },
                  color: '#414141',
                  mb: { xs: '32px', md: '48px' },
                }}
              >
                (+234) 814-929-1147
              </Typography>
              <Typography
                gutterBottom
                component='h5'
                sx={{
                  width: { xs: '231px', md: '297px' },
                  fontWeight: 'normal',
                  fontSize: { xs: '24px', md: '36px' },
                  lineHeight: { xs: '29px', md: '44px' },
                  color: '#121212',
                  mb: { xs: '16px', md: '20px' },
                }}
              >
                Social Media
              </Typography>
              <Box sx={{ display: 'flex' }}>
                <Link target='_blank' href='https://twitter.com/emmahnuelayo'>
                  <TwitterIcon sx={{ color: '#414141' }} />
                </Link>
                <Link
                  target='_blank'
                  href='https://linkedin.com/in/emmanuel-fagbemide-5a797b151'
                >
                  <LinkedInIcon sx={{ color: '#414141' }} />
                </Link>
                <Link target='_blank' href='https://github.com/emmahnuelayo'>
                  <GitHubIcon sx={{ color: '#414141' }} />
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ mb: { xs: '48px', md: '24px' } }}>
              <form
                onSubmit={this.handleSubmit}
                autoComplete='off'
                noValidate
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  flexDirection: 'column',
                }}
              >
                <Box>
                  <TextField
                    name='name'
                    variant='outlined'
                    label='Name'
                    fullWidth
                    value={this.state.valueInput}
                    sx={{
                      mb: { xs: '32px', lg: '64px' },
                      width: { xs: '310px', lg: '580px' },
                      backgroundColor: '#f6f6f6',
                    }}
                    onChange={this.handleChange}
                  />
                  <TextField
                    name='message'
                    variant='outlined'
                    label='Message'
                    fullWidth
                    multiline
                    rows={4}
                    value={this.state.valueTextArea}
                    onChange={this.handleChangeTextArea}
                    sx={{
                      mb: { xs: '32px', lg: '64px' },
                      width: { xs: '310px', lg: '580px' },
                      backgroundColor: '#f6f6f6',
                    }}
                  />
                </Box>
                <Button
                  variant='contained'
                  size='large'
                  type='submit'
                  fullWidth
                  sx={{ width: { xs: '116px', lg: '131px' } }}
                  color='brownCol'
                >
                  Send
                </Button>
              </form>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    );
  }
}

export default Contact;
