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
      alert('Success!', 'Your message has been sent successfully!', 'success');
       setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      swal('Error','An error occurred while submitting the form. Please try again later.', 'error');
    }
  };

  return (
    <Container fluid>
      <Container className='flexs' style={{ padding: '100px' }}>
        <h1 id="CONTACT">CONTACT US</h1>
        <span className='headings' style={{ height: '2px', width: '100px', backgroundColor: 'yellow' }}>
          <div className='anihead' style={{ height: '2px', width: '5%', backgroundColor: '#90d216' }}></div>
        </span>
      </Container>
      <Container fluid>
        <Container className='flexs-row gap-3'>
          <div className="col-md-5 flexs gap-3">
            <div>
              <h2>Contact Information</h2>
              <hr style={{ width: '100%' }} />
            </div>
            <div className='flexs-row col-md-12 border border-2 p-3 rounded border-success '>
              <div className='flexs mx-2' style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#54ba59' }}>
                <LocalPhoneIcon />
              </div>
              <div>
                <h6>Phone</h6>
                <p>+91 9037435846</p>
                <p>+91 9207547803</p>
              </div>
            </div>
            <div className='flexs-row col-md-12 border border-2 p-3 rounded border-success '>
              <div className='flexs mx-2' style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#54ba59' }}>
                <EmailIcon />
              </div>
              <div>
                <h6>Email</h6>
                <p>muhammedsulaimant162@gmail.com</p>
                <p>muhammadsulaimant367@gmail.com</p>
              </div>
            </div>
            <div className='flexs-row col-md-12 border border-2 p-3 rounded border-success '>
              <div className='flexs mx-2' style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#54ba59' }}>
                <LocationOnIcon />
              </div>
              <div>
                <h6>Address</h6>
                <p>Thayill(H) Kongad 678631</p>
                <p>Palakkad Kerala India</p>
              </div>
            </div>
          </div>
          <div className="col-md-6  p-4 rounded mt-3 border border-2 border-success " style={{ backgroundColor: ' #2f2c2c' }} >
            <form onSubmit={handleSubmit}>
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
                <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Your subject" value={formData.subject} onChange={handleChange} required />
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
      <footer className='w-100 mx-0 p-1 mt-3 bg-dark text-center'>
        <Container>
          <p className="mb-0 text-white">© 2024 Muhammed SulaimanT</p>
          <div className='d-flex justify-content-center'>
            <Button href='https://www.facebook.com/muhammedsulaiman.t/' className='hover-logo-icon mx-1 '><FacebookIcon /></Button>
            <Button href='https://www.facebook.com/muhammedsulaiman.t/' className='hover-logo-icon mx-1 btn btn-dark'><XIcon /></Button>
            <Button href='https://www.facebook.com/muhammedsulaiman.t/' className='hover-logo-icon mx-1 btn btn-dark '><GitHubIcon /></Button>
            <Button href='https://www.facebook.com/muhammedsulaiman.t/' className='hover-logo-icon mx-1  ' style={{ backgroundImage: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)' }}><InstagramIcon /></Button>
            <Button href='https://www.facebook.com/muhammedsulaiman.t/' className='hover-logo-icon mx-1'><LinkedInIcon /></Button>
            <Button href='https://www.facebook.com/muhammedsulaiman.t/' className='hover-logo-icon mx-1 btn btn-success '><WhatsAppIcon /></Button>
          </div>
        </Container>
      </footer>
    </Container>
  );
};

export default Contact;
