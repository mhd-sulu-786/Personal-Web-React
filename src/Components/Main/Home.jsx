import React from 'react';
import { Container, Button } from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../assist/sulu-photo.jpg'

const Home = () => {
  return (
    <Container
      fluid
      id='HOME'
      className=' d-flex flex-column justify-content-center align-items-center'
      style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
        height:'90vh '
      }}
    >
      <div className='container-fluid text-center mt-3'>
        <Container className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
          
         
          <div className='col-md-6 text-center text-md-left'>
        
          
            <h1> Hey, I'm{' '}<br/>
        <span style={{ }}>Muhammed Sulaiman.T</span>
          <br />
          <span style={{ color: '#F92C85' }}>MERN Stack Developer</span>
          </h1>
      
            <p> "I'm a MERN stack developer passionate about crafting seamless user experiences and building robust web applications with pixel-perfect design. With expertise in dynamic websites and a commitment to high-quality, innovative solutions, I strive to push the boundaries of web development. Let's collaborate to bring your vision to life!"</p>
            <a  href="https://www.linkedin.com/in/muhammad-sulaiman-t-6b6141245/" className="btn let-get" style={{ borderColor: 'transparent', borderRadius: '10px', padding: '10px 20px', marginBottom: '20px' }}>
              Let's get started
            </a>
          </div>
        </Container>
        <div className='social-media-links d-flex justify-content-center align-items-center mb-2 gap-4 '>
         
       <a   href='https://www.facebook.com/muhammedsulaiman.t/'>

            <FacebookIcon className='text-white'            />
       </a>
 
       
     <a href='https://x.com/mhd_sulu_786'>

            <XIcon className='text-white'      />
     </a>
 
        
        <a     href='https://github.com/mhd-sulu-786'>

            <GitHubIcon className='text-white' />
        </a>
  
    
        
        <a      href='https://www.instagram.com/mhd_sulu_786'>

            <InstagramIcon className='text-white' />
        </a>
        
          
          
        <a    href='https://www.linkedin.com/in/muhammad-sulaiman-t-6b6141245/'>

            <LinkedInIcon className='text-white'/>
        </a>

          
          
          
            <a href='https://api.whatsapp.com/send/?phone=919207547803&text=Hi%20Developer&type=phone_number&app_absent=0'>
            <WhatsAppIcon className='text-white'    />

            </a>
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
