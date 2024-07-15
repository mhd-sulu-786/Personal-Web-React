import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './resume.css';

const Resume = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/Muhammed_Sulaiman_T_Resume.pdf`;
    link.download = 'Muhammed_Sulaiman_T_Resume.pdf';
    link.click();
  };

  return (
    <Container fluid className="resume-container px-0">
      <Container className="py-5">
        <Row>
          <Col md={12} className="text-center">
            <h1 id="RESUME" className="display-4 resume-title">MY RESUME</h1>
            <div className="heading-underline mb-4">
              <div className="anihead"></div>
            </div>
            <Button onClick={handleDownload} variant="primary" className="mt-3">
              Download Resume
            </Button>
          </Col>
        </Row>
      </Container>
      <Container className="py-5 rounded">
        <Row>
          <Col md={12} className="mb-4 rounded">
            <div className="pdf-viewer rounded">
              <Viewer
                 className="rounded"
                fileUrl={`./assist/Muhammed_Sulaiman_T_Resume.pdf`}
                plugins={[defaultLayoutPluginInstance]}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Resume;
