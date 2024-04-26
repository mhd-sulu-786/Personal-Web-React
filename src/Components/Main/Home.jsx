import React from 'react'
import { Button, Container } from 'react-bootstrap'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const Home = () => {
  return (
    <Container fluid id='HOME' style={{ height: '100vh', marginTop:'100px',width:'100%'}} className='d-flex justify-content-center align-items-center flex-column ' >
      <div className='container-fluid h-75 text-center text-white mt-3 d-flex justify-content-center align-items-center ' >
        <Container>
          <h4> Hey i'm <h5 style={{ color: 'GREEN' }}>Muhammed Sulaiman T</h5><h5 style={{ color: 'yellow' }}>Mern Stack developer</h5></h4>
          <p className='mt-3 font-weight-bold'> "I'm a MERN stack developer with a passion for crafting seamless user experiences. With a keen eye for detail and a dedication to clean, efficient code, I specialize in building robust web applications that marry functionality with pixel-perfect design.

            My expertise lies in creating dynamic and interactive websites that captivate users from the moment they land on the page. From intuitive user interfaces to smooth animations, I strive to elevate the user experience to new heights.

            Whether it's implementing complex features or refining the finer details of a design, I take pride in my ability to deliver high-quality solutions that exceed expectations. With a commitment to staying at the forefront of web development trends, I'm always eager to explore new technologies and techniques to push the boundaries of what's possible in the digital realm.

            Let's collaborate to bring your vision to life and create something truly exceptional!"</p>
          <div className='d-flex justify-content-center   '>
            <Button href='https://www.facebook.com/muhammedsulaiman.t/' className='hover-logo-icon mx-1 '><FacebookIcon /></Button>
            <Button href='https://www.facebook.com/muhammedsulaiman.t/' className='hover-logo-icon mx-1 btn btn-dark'><XIcon /></Button>
            <Button href='https://www.facebook.com/muhammedsulaiman.t/' className='hover-logo-icon mx-1 btn btn-dark '><GitHubIcon /></Button>
            <Button href='https://www.facebook.com/muhammedsulaiman.t/' className='hover-logo-icon mx-1  ' style={{backgroundImage:'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)'}}><InstagramIcon /></Button>
            <Button href='https://www.facebook.com/muhammedsulaiman.t/' className='hover-logo-icon mx-1'><LinkedInIcon /></Button>
            <Button href='https://www.facebook.com/muhammedsulaiman.t/' className='hover-logo-icon mx-1 btn btn-success '><WhatsAppIcon /></Button>

          </div>

        </Container>
      </div>
      <div style={{ bottom: '0' }} className='d-flex justify-content-center align-items-end p-5 mt-2 '>
        <p style={{ color: 'rgb(133, 124, 124)' }} >< ArrowDownwardIcon className='down-arow' />SCROLL DWON </p>

      </div>


    </Container>
  )
}

export default Home