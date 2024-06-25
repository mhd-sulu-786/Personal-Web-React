import React from 'react';
import { Container, Button } from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <Container
      fluid
      id='HOME'
      className='h-100 d-flex flex-column justify-content-center align-items-center'
      style={{
        backgroundColor: '#6E6E6E',
        color: 'white',
        padding: '20px',
      }}
    >
      <div className='container-fluid h-75 text-center mt-3'>
        <h4>
          Hey, I'm{' '}
          <span style={{ color: '#BCFD4C' }}>Muhammed Sulaiman T</span>
          <br />
          <span style={{ color: '#F92C85' }}>MERN Stack Developer</span>
        </h4>
        <p className='mt-3 font-weight-bold' style={{ color: '#5EBEC4' }}>
          "I'm a MERN stack developer with a passion for crafting seamless
          user experiences. With a keen eye for detail and a dedication to
          clean, efficient code, I specialize in building robust web
          applications that marry functionality with pixel-perfect design.
          <br />
          <br />
          My expertise lies in creating dynamic and interactive websites that
          captivate users from the moment they land on the page. From
          intuitive user interfaces to smooth animations, I strive to elevate
          the user experience to new heights.
          <br />
          <br />
          Whether it's implementing complex features or refining the finer
          details of a design, I take pride in my ability to deliver
          high-quality solutions that exceed expectations. With a commitment
          to staying at the forefront of web development trends, I'm always
          eager to explore new technologies and techniques to push the
          boundaries of what's possible in the digital realm.
          <br />
          <br />
          Let's collaborate to bring your vision to life and create something
          truly exceptional!"
        </p>
        <div className='social-media-links d-flex justify-content-center align-items-center '>
          <Button
            href='https://www.facebook.com/muhammedsulaiman.t/'
            className='hover-logo-icon mx-1 d-flex justify-content-center align-items-center '
            style={{
              backgroundColor: '#4267B2',
              borderColor: 'transparent',
              color: 'white',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
            }}
          >
            <FacebookIcon />
          </Button>
          <Button
            href='https://www.x.com/'
            className='hover-logo-icon mx-1 btn btn-dark  d-flex justify-content-center align-items-center'
            style={{
              borderRadius: '50%',
              width: '40px',
              height: '40px',
            }}
          >
            <XIcon />
          </Button>
          <Button
            href='https://www.github.com/'
            className='hover-logo-icon mx-1 btn btn-dark  d-flex justify-content-center align-items-center'
            style={{
              borderRadius: '50%',
              width: '40px',
              height: '40px',
            }}
          >
            <GitHubIcon />
          </Button>
          <Button
            href='https://www.instagram.com/'
            className='hover-logo-icon mx-1  d-flex justify-content-center align-items-center'
            style={{
              backgroundImage:
                'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)',
              borderColor: 'transparent',
              color: 'white',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
            }}
          >
            <InstagramIcon />
          </Button>
          <Button
            href='https://www.linkedin.com/'
            className='hover-logo-icon mx-1  d-flex justify-content-center align-items-center'
            style={{
              backgroundColor: '#0077B5',
              borderColor: 'transparent',
              color: 'white',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
            }}
          >
            <LinkedInIcon />
          </Button>
          <Button
            href='https://www.whatsapp.com/'
            className='hover-logo-icon mx-1 btn btn-success  d-flex justify-content-center align-items-center'
            style={{
              borderRadius: '50%',
              width: '40px',
              height: '40px',
            }}
          >
            <WhatsAppIcon />
          </Button>
        </div>
      </div>
      <div className='scroll-down d-flex justify-content-center align-items-end p-5 mt-2'>
        <p style={{ color: "#BCFD4C" }}>
          <ArrowDownwardIcon className='down-arrow' /> SCROLL DOWN
        </p>
      </div>
    </Container>
  );
};

export default Home;
