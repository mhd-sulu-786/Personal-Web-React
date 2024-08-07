import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import axios from 'axios';
import swal from 'sweetalert';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://script.google.com/macros/s/AKfycbwqqQ1J7XoTS-mrh-1ONnIvscxo0rIC-9IwtuJV2pitU7oZqP6Iu8CT9A-E020DV7vq4g/exec', formData);
      swal('Success!', 'Your message has been sent successfully!', 'success');
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      swal('Error', 'An error occurred while submitting the form. Please try again later.', 'error');
    }
  };

  return (
    <Container fluid id="CONTACT" style={{ width: '100%', backgroundColor: '#000000', color: '#FFFFFF' }}>
      <Container className='flexs' style={{ padding: '100px' }}>
        <h1 style={{display:{xs:'none',md:'flex'}}}>CONTACT US</h1>
        <span className='headings'>
          <div className='anihead'></div>
        </span>
      </Container>
      <Container fluid>
        <Container className='flexs-row gap-3'>
          <div className="col-md-5 flexs gap-3 text-center border pt-2 rounded">
            <div>
              <h2>Contact Information</h2>
              <hr style={{ width: '100%' }} />
            </div>
            <div className='flexs-row col-md-12  p-3    text-center'>
            
              <div className="contact-info  text-center">
                <h6 className='  align-items-center gap-1'>   <LocalPhoneIcon  className='text-success' />Phone </h6>
                <p className='text-center'>+91 9037435846</p>
                <p className='text-center'>+91 9207547803</p>
              </div>
            </div>
            <div className='flexs-row col-md-12  p-3   '>
             
              <div className="contact-info text-center">
                <h6 className='  align-items-center gap-1'><EmailIcon  className='text-danger' />Email</h6>
                <p className='text-center'>muhammedsulaimant162@gmail.com</p>
                <p className='text-center'>muhammadsulaimant367@gmail.com</p>
              </div>
            </div>
            <div className='flexs-row col-md-12  p-3   '>
             
              <div className="contact-info text-center">
                <h6 className='  align-items-center gap-1 text-center'>  <LocationOnIcon  className='text-primary' />Address</h6>
                <p className='text-center'>Thayill(H) Kongad 678631</p>
                <p className='text-center'>Palakkad Kerala India</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-4 rounded  " style={{ backgroundColor: '#FFFFFF' }}>
            <form onSubmit={handleSubmit}  className='d-flex flex-column justfy-content-center '>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="fullName" name="fullName" placeholder="Enter Your Sweet Name" value={formData.fullName} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Your Subject" value={formData.subject} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" name="message" rows="5" placeholder="Enter Your Message" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <Button type="submit" className='btn btn-success'>SUBMIT</Button>
            </form>
          </div>
        </Container>
      </Container>
     
      <footer className='w-100 mx-0 p-1 mt-3' style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>
        <Container className='p-2'>
          <p className="mb-0 text-white text-center">© 2024 Muhammed SulaimanT</p>
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
            href='https://x.com/mhd_sulu_786'
            className='hover-logo-icon mx-1 btn btn-dark d-flex justify-content-center align-items-center bg-dark'
            style={{
              borderRadius: '50%',
              width: '40px',
              height: '40px',
            }}
          >
            <XIcon className='text-white' />
          </Button>
          <Button
            href='https://github.com/mhd-sulu-786'
            className='hover-logo-icon mx-1 btn btn-dark d-flex justify-content-center align-items-center bg-dark'
            style={{
              borderRadius: '50%',
              width: '40px',
              height: '40px',
            }}
          >
            <GitHubIcon className='text-white' />
          </Button>
          <Button
            href='https://www.instagram.com/mhd_sulu_786'
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
            href='https://www.linkedin.com/in/muhammad-sulaiman-t-6b6141245/'
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
            href='https://api.whatsapp.com/send/?phone=919207547803&text=Hi%20Developer&type=phone_number&app_absent=0'
            className='hover-logo-icon mx-1 btn btn-success d-flex justify-content-center align-items-center text-white bg-success'
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
        </Container>
      </footer>
    </Container>
  );
};

export default Contact;
