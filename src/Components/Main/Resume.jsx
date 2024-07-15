import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SchoolIcon from '@mui/icons-material/School';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LaptopIcon from '@mui/icons-material/Laptop';
import 'bootstrap/dist/css/bootstrap.min.css';
import './resume.css';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/Muhammed_Sulaiman_T_Resume.pdf`;
    link.download = 'Muhammed_Sulaiman_T_Resume.pdf';
    link.click();
  };

  return (
    <Container fluid className="resume-container px-0 " style={{borderBottom:'1px solid black'}}>
      <Container className="py-5">
        <Row>
          <Col md={12} className="text-center">
            <h1 id="RESUME" className="display-4 resume-title">MY RESUME</h1>
            <div className="heading-underline mb-4">
              <div className="anihead"></div>
            </div>
            {/* <Button onClick={handleDownload} variant="primary" className="mt-3">
              Download Resume
            </Button> */}
          </Col>
        </Row>
      </Container>
      <Container className="py-5 text-center d-flex  justfy-contet-center align-items-center flex-column">
    
          <Col md={6} lg={4} className="mb-4 text-center">
            <h3 className="mb-3"><AutoStoriesIcon /> Educational Qualification</h3>
            <ul className="list-unstyled">
              <li>
                <strong>Plus Two (Humanities)</strong>
                <p><SchoolIcon /> HSS KERALASSERI PKD (2020 - 2022)</p>
                <p>Marks: 62.5%</p>
              </li>
              <li>
                <strong>S.S.L.C</strong>
                <p><SchoolIcon /> KPRPH.S.S Kongad Palakkad (2019 - 2020)</p>
                <p>Marks: 82%</p>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={4} className="mb-4 text-center">
            <h3 className="mb-3"><HomeRepairServiceIcon /> Working Experience</h3>
            <ul className="list-unstyled">
              <li>
                <strong>MERN Stack Developer</strong>
                <p><SchoolIcon /> SOFTRONIICS, Palakkad, Kerala (June 2024 - Present)</p>
                <p>Developed a Care Connect web application using the MERN stack allowing users to donate their used items.</p>
              </li>
            </ul>
          </Col>
          <Col md={12} lg={4} className="mb-4 text-center">
            <h3 className="mb-3">Projects</h3>
            <ul className="list-unstyled">
              <li>
                <a href="https://luxeshopper.vercel.app/"><h5><strong> Ecommerce Platform  </strong></h5></a>
                 
                <p>Facilitates online buying and selling of various products.</p>
                <ul>
                  <li>Product Catalog: Display of products with detailed descriptions, prices, and availability.</li>
                  <li>Shopping Cart: Ability for users to add, remove, and manage items for purchase.</li>
                  <li>Order Management: Track orders from placement to delivery status updates.</li>
                  <li>User Authentication: Secure login and registration system using bcrypt-encrypted passwords.</li>
                  <li>Payment Integration: Integration of payment gateways for secure transactions.</li>
                </ul>
                <p>Tech Stack: React.js, React Router, CSS, Express.js, MongoDB, Mongoose, bcrypt, Cors, Body-parser.</p>
              </li>
              <li>
              <a href="https://hospital-management-frontend-ruby.vercel.app/"><h5><strong>Hospital Management Admin Web App</strong></h5></a>
                <p>Provides comprehensive functionalities for managing hospital operations securely.</p>
                <ul>
                  <li>Secure Authentication: Robust registration and login system with bcrypt-encrypted passwords.</li>
                  <li>Employee Management: Add, edit, view, and delete employee records with detailed profiles.</li>
                  <li>Department Management: Manage departments with unique profiles and functionalities.</li>
                  <li>Department Head Management: Efficiently manage department heads with add, edit, and view capabilities.</li>
                  <li>Dynamic Navigation and Layout: User-friendly navigation bar and consistent footer for seamless user experience.</li>
                  <li>Protected Routes: Ensure data security and access control with private routes for authenticated users.</li>
                </ul>
                <p>Tech Stack: React.js, React Router, CSS, Express.js, MongoDB, Mongoose, bcrypt, Cors, Body-parser.</p>
              </li>
            </ul>
          </Col>
    
        <Row>
          <Col md={12} className='text-center'>
            <h3 className="mb-3"><LaptopIcon /> Skills</h3>
            <ul className="list-unstyled">
              <li><strong>Programming Languages:</strong> JavaScript, Python, Java, C</li>
              <li><strong>Frontend Technologies:</strong> React.js, HTML, CSS</li>
              <li><strong>Backend Technologies:</strong> Node.js, Express.js</li>
              <li><strong>Database:</strong> MongoDB, Mongoose</li>
              <li><strong>Version Control:</strong> Git, GitHub</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='text-center'>
            <h3 className="mb-3"><SchoolIcon /> Certifications</h3>
            <ul className="list-unstyled">
              <li><strong>Problem Solving (2024):</strong><a href="https://www.hackerrank.com/certificates/96e0102ab892">Completed Hacker Rank</a> </li>
              <li><strong>React (2024):</strong> <a href="https://www.hackerrank.com/certificates/225b3dfd08b9">Completed Hacker Rank</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Resume;
