import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import 'react-bootstrap';
import webimage from '../assist/code.png';

const About = () => {
  const [val_1, setval_1] = useState(0);
  const [val_2, setval_2] = useState(0);
  let endfrontend = 80;
  let endbackend = 85;

  useEffect(() => {
    const timer = setTimeout(() => {
      for (let val = 0; val <= endbackend; val++) {
        if (val <= endfrontend) {
          setval_1(val);
        }
        setval_2(val);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [endbackend, endfrontend]);

  return (
    <Container fluid style={{ width: '100%' }}>
      <Container className='flexs' style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <Container className='flexs ' style={{ paddingBottom: '50px' }}>
          <h1 id="ABOUT">ABOUT</h1>
          <span className='headings' style={{ height: '2px', width: '100px', backgroundColor: 'yellow' }}>
            <div className='anihead' style={{ height: '2px', width: '5%', backgroundColor: '#90d216' }}></div>
          </span>
        </Container>
        <Container className=' flexs-row col-12 mb-5' style={{ gap: 3 }}>
          <Container className='col-md-6'>
            <img className='img-fluid' src="https://tf-react-bieber.vercel.app/_next/image?url=%2Fimages%2Fabout-image.jpg&w=750&q=75" alt="about-img" />

          </Container>
          {/* <img src="https://tf-react-bieber.vercel.app/_next/image?url=%2Fimages%2Fabout-image.jpg&w=750&q=75" alt="about img" className='col-md-6' srcset="" /> */}
          <Container className='flexs col-md-5 '>
            <h5>Hi, I'm <span style={{ color: '#90d216' }} >MUHAMMED SULAIMAN T</span></h5>
            <ul style={{ gap: 9, listStyle: 'outside ' }}>
              <li>  <strong>First Name</strong> : <strong>MUHAMMED</strong></li>
              <li>  <strong>Last Name </strong> : <strong> SULAIMAN.T</strong></li>
              <li>  <strong>Age </strong> : <strong> 19</strong></li>
              <li>  <strong>Nationality </strong> : <strong>India</strong></li>
              <li> <strong>Languages </strong> : <strong> English, Malayalam</strong></li>
              <li> <strong>Address </strong> : <strong> kongad Palakkad Kerala 678631</strong></li>
              <li> <strong>Phone </strong> : <strong> 9037435846</strong></li>
              <li> <strong>Freelance </strong> : <strong> Available</strong></li>
            </ul>
          </Container>
        </Container>
        <Container>
          <Container className='flexs' style={{ padding: '100px' }}>
            <h1 id="SKILLS" >SKILLS</h1>
            <span className='headings' style={{ height: '2px', width: '100px', backgroundColor: 'yellow' }}>
              <div className='anihead' style={{ height: '2px', width: '5%', backgroundColor: '#90d216' }}></div>
            </span>
          </Container>
          <Container fluid className='flexs-row gap-3 m-0  p-5 '>
            <div className="col-md-5 flexs  rounded   p-4 ">
              <div className='circle-prograss-1 bg-primary flexs' style={{ width: '260px', height: '260px', borderRadius: '50%', position: 'relative' }}>
                <div className='circle-prograss-child  flexs' style={{ background: 'linear-gradient(rgb(0, 0, 0), 40%, darkblue, 80%, rgb(5, 5, 119))', width: '220px', height: '220px', borderRadius: '50%', position: 'absolute' }}>
                  <span style={{ position: 'relative', fontSize: '20px', fontFamily: 'fantasy' }}>{val_1}%</span>
                </div>
              </div>
              <span style={{ fontFamily: 'fantasy', padding: '5px' }} >FRONT END</span>
            </div>
            <div className="col-md-5 flexs  rounded  p-4 ">
              <div className='circle-prograss-2 bg-primary flexs' style={{ width: '260px', height: '260px', borderRadius: '50%', position: 'relative' }}>
                <div className='circle-prograss-child  flexs' style={{ background: 'linear-gradient(rgb(0, 0, 0), 40%, darkblue, 80%, rgb(5, 5, 119))', width: '220px', height: '220px', borderRadius: '50%', position: 'absolute' }}>
                  <span style={{ position: 'relative', fontSize: '20px', fontFamily: 'fantasy' }}>{val_2}%</span>
                </div>
              </div>
              <span style={{ fontFamily: 'fantasy', padding: '5px' }} >BACK END</span>
            </div>
          </Container>
        </Container>
        <Container className='flexs-row gap-2'>
          <div className="col-md-4 flexs  rounded  p-4  border border-success bg-dark">
            <h6 className='flexs-row '>HTML&&CSS - <span className='text-success'> 90%</span></h6>
            <div className='bg-primary  border border-success  border border-success-dark' style={{ width: '100%', height: '5px', position: 'relative' }}>
              <div className='bg-success' style={{ width: '90%', height: '5px', position: 'absolute' }}></div>

            </div>
          </div>
          <div className="col-md-4 flexs  rounded  p-4  border border-success bg-dark">
            <h6 className='flexs-row '>JS - <span className='text-success'> 80%</span></h6>
            <div className='bg-primary  border border-success  border border-success-dark' style={{ width: '100%', height: '5px', position: 'relative' }}>
              <div className='bg-success' style={{ width: '80%', height: '5px', position: 'absolute' }}></div>

            </div>
          </div>
          <div className="col-md-4 flexs  rounded  p-4  border border-success bg-dark">
            <h6 className='flexs-row '>BOOSTRAP - <span className='text-success'> 75%</span></h6>
            <div className='bg-primary  border border-success  border border-success-dark' style={{ width: '100%', height: '5px', position: 'relative' }}>
              <div className='bg-success' style={{ width: '75%', height: '5px', position: 'absolute' }}></div>

            </div>
          </div>
          <div className="col-md-4 flexs  rounded  p-4  border border-success bg-dark">
            <h6 className='flexs-row '>REACT - <span className='text-success'> 85%</span></h6>
            <div className='bg-primary  border border-success  border border-success-dark' style={{ width: '100%', height: '5px', position: 'relative' }}>
              <div className='bg-success' style={{ width: '85%', height: '5px', position: 'absolute' }}></div>

            </div>
          </div>
          <div className="col-md-4 flexs  rounded  p-4  border border-success bg-dark">
            <h6 className='flexs-row '>NODE JS - <span className='text-success'> 78%</span></h6>
            <div className='bg-primary  border border-success  border border-success-dark' style={{ width: '100%', height: '5px', position: 'relative' }}>
              <div className='bg-success' style={{ width: '78%', height: '5px', position: 'absolute' }}></div>

            </div>
          </div>
          <div className="col-md-4 flexs  rounded  p-4  border border-success bg-dark">
            <h6 className='flexs-row '>EXPRESS JS - <span className='text-success'> 79%</span></h6>
            <div className='bg-primary  border border-success  border border-success-dark' style={{ width: '100%', height: '5px', position: 'relative' }}>
              <div className='bg-success' style={{ width: '79%', height: '5px', position: 'absolute' }}></div>

            </div>
          </div>
          <div className="col-md-4 flexs  rounded  p-4  border border-success bg-dark">
            <h6 className='flexs-row '>MONGODB - <span className='text-success'> 82%</span></h6>
            <div className='bg-primary  border border-success  border border-success-dark' style={{ width: '100%', height: '5px', position: 'relative' }}>
              <div className='bg-success' style={{ width: '82%', height: '5px', position: 'absolute' }}></div>

            </div>
          </div>
          <div className="col-md-4 flexs  rounded  p-4  border border-success bg-dark">
            <h6 className='flexs-row '>GIT - <span className='text-success'> 86%</span></h6>
            <div className='bg-primary  border border-success  border border-success-dark' style={{ width: '100%', height: '5px', position: 'relative' }}>
              <div className='bg-success' style={{ width: '86%', height: '5px', position: 'absolute' }}></div>

            </div>
          </div>
          <div className="col-md-4 flexs  rounded  p-4  border border-success bg-dark">
            <h6 className='flexs-row '>JAVA - <span className='text-success'> 60%</span></h6>
            <div className='bg-primary  border border-success  border border-success-dark' style={{ width: '100%', height: '5px', position: 'relative' }}>
              <div className='bg-success' style={{ width: '60%', height: '5px', position: 'absolute' }}></div>

            </div>
          </div>
          <div className="col-md-4 flexs  rounded  p-4  border border-success bg-dark">
            <h6 className='flexs-row '>  C - <span className='text-success'> 89%</span></h6>
            <div className='bg-primary  border border-success  border border-success-dark' style={{ width: '100%', height: '5px', position: 'relative' }}>
              <div className='bg-success' style={{ width: '89%', height: '5px', position: 'absolute' }}></div>

            </div>
          </div>
          <div className="col-md-4 flexs  rounded  p-4  border border-success bg-dark">
            <h6 className='flexs-row '>PYTHON - <span className='text-success'> 40%</span></h6>
            <div className='bg-primary  border border-success  border border-success-dark' style={{ width: '100%', height: '5px', position: 'relative' }}>
              <div className='bg-success' style={{ width: '40%', height: '5px', position: 'absolute' }}></div>

            </div>
          </div>
        </Container>
      </Container>
      <Container>
        <Container className='flexs' style={{ padding: '100px' }}>
          <h1 id="SERVICES" >MY SERVICES</h1>
          <span className='headings' style={{ height: '2px', width: '100px', backgroundColor: 'yellow' }}>
            <div className='anihead' style={{ height: '2px', width: '5%', backgroundColor: '#90d216' }}></div>
          </span>
        </Container>
        <Container className='  p-4 text-center' style={{ border: ' 2px solid blueviolet' }}>
          <circle className='p-4' style={{ borderRadius: '50%', border: '1px solid blueviolet', width: '60px', height: '60px' }}>
            <img style={{ borderRadius: '50%', width: '60px' }} src={webimage} alt="webdevelopment imge" />
          </circle>
          <h2 className='text-success pt-3'>WEB DEVLOPMENT</h2>
          <p className='p-3'>Welcome to our web development services! We specialize in crafting dynamic, user-centric websites tailored to meet your specific needs. Our services include custom website development, responsive design, e-commerce solutions, content management systems (CMS), and web application development. Whether you're an individual, a start-up, or a well-established business, we're dedicated to providing you with high-quality, scalable, and cost-effective web solutions that drive your online presence forward. We focus on combining creativity and functionality to deliver websites that not only look great but also perform seamlessly across all devices. Let us bring your vision to life on the web!</p>

        </Container >

      </Container>
    </Container>
  )
}

export default About
