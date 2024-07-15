import React from 'react';
import { Container, Button } from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <Container
      fluid
      id='HOME'
      className='h-100 d-flex flex-column justify-content-center align-items-center'
      style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
      }}
    >
      <div className='container-fluid text-center mt-3'>
        <Container className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
          
          <div className='col-md-6 d-flex justify-content-center'>
            <img
              src="../assist/sulu photo.jpg"
              alt='account image'
              className='w-75 p-2'
              style={{ borderRadius: '50%' }}
            />
          </div>
          <div className='col-md-6 text-center text-md-left'>
        
          
            <h1> Hey, I'm{' '}<br/>
        <span style={{ color: '#BCFD4C' }}>Muhammed Sulaiman.T</span>
          <br />
          <span style={{ color: '#F92C85' }}>MERN Stack Developer</span>
          </h1>
      
            <p> "I'm a MERN stack developer passionate about crafting seamless user experiences and building robust web applications with pixel-perfect design. With expertise in dynamic websites and a commitment to high-quality, innovative solutions, I strive to push the boundaries of web development. Let's collaborate to bring your vision to life!"</p>
            <Button style={{ backgroundColor: '#28a745', borderColor: 'transparent', borderRadius: '10px', padding: '10px 20px', marginBottom: '20px' }}>
              Let's get started
            </Button>
          </div>
        </Container>
        <div className='social-media-links d-flex justify-content-center align-items-center mb-2 gap-2'>
          <Button
            href='https://www.facebook.com/muhammedsulaiman.t/'
            className='hover-logo-icon mx-1 d-flex justify-content-center align-items-center text-white'
            style={{
              backgroundColor: '#4267B2',
              borderColor: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
            }}
          >
            <FacebookIcon className='text-white' />
          </Button>
          <Button
            href='https://www.x.com/'
            className='hover-logo-icon mx-1 btn btn-dark d-flex justify-content-center align-items-center'
            style={{
              borderRadius: '50%',
              width: '40px',
              height: '40px',
            }}
          >
            <XIcon className='text-white' />
          </Button>
          <Button
            href='https://www.github.com/'
            className='hover-logo-icon mx-1 btn btn-dark d-flex justify-content-center align-items-center'
            style={{
              borderRadius: '50%',
              width: '40px',
              height: '40px',
            }}
          >
            <GitHubIcon className='text-white' />
          </Button>
          <Button
            href='https://www.instagram.com/'
            className='hover-logo-icon mx-1 d-flex justify-content-center align-items-center'
            style={{
              backgroundImage: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)',
              borderColor: 'transparent',
              color: 'white',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
            }}
          >
            <InstagramIcon className='text-white' />
          </Button>
          <Button
            href='https://www.linkedin.com/'
            className='hover-logo-icon mx-1 d-flex justify-content-center align-items-center'
            style={{
              backgroundColor: '#0077B5',
              borderColor: 'transparent',
              color: 'white',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
            }}
          >
            <LinkedInIcon className='text-white' />
          </Button>
          <Button
            href='https://www.whatsapp.com/'
            className='hover-logo-icon mx-1 btn btn-success d-flex justify-content-center align-items-center text-white'
            style={{
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              color:'whitesmoke !important'
            }}
          >
            <WhatsAppIcon className='text-white' />
          </Button>
        </div>
      </div>
      {/* <div className='scroll-down d-flex justify-content-center align-items-end p-5 mt-2'>
        <p style={{ color: '#BCFD4C' }}>
          <ArrowDownwardIcon className='down-arrow' /> SCROLL DOWN
        </p>
      </div> */}
    </Container>
  );
};

export default Home;
