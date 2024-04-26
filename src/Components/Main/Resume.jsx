import React from 'react'
import { Container } from 'react-bootstrap'
import SchoolIcon from '@mui/icons-material/School';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LaptopIcon from '@mui/icons-material/Laptop';
const Resume = () => {
  return (
    <Container fluid>
      <Container className='flexs' style={{ padding: '100px',width:'100%' }}>
            <h1 id="RESUME" >MY RESUME</h1>
            <span className='headings' style={{ height: '2px', width: '100px', backgroundColor: 'yellow' }}>
              <div className='anihead' style={{ height: '2px', width: '5%', backgroundColor: '#90d216' }}></div>
            </span>
            </Container>
            <div className='container-fluid flexs-row'>
              <Container className='col-md-5 flexs'>
                <h3><AutoStoriesIcon/>Educational Qualification</h3>
                <ul style={{listStyleType:'none'}}>
                  <strong><li>Plus Two (Humanities)</li></strong>
                  <p><SchoolIcon/><strong>HSS KERALASSERI PKD</strong></p>
                  <strong><li>C , Java ,Python,Js</li></strong> 
                    <p><SchoolIcon/><strong>On Youtube (Brototype,debug media...)</strong></p>
                    <strong><li> Webdesigning (HTML,CSS,Boostrap,Js) and git .</li></strong>
                    <p><SchoolIcon/><strong>On Youtube (Brototype,debug media...)and W3Schools</strong></p>
                    <strong><li>Logical work outs</li></strong>
                    <p><SchoolIcon/><strong>leetcode and Hacker Rank</strong></p>
                    <strong><li>NODE,Mongodb,Express,React</li></strong>
                    <p><SchoolIcon/><strong>Open Source online</strong></p>
                    
                    <p></p>
                </ul>

              </Container>
              <Container className='col-md-5 flexs'>
                <h3><HomeRepairServiceIcon/>Working Experience</h3>
                <ul style={{listStyleType:'none'}}>
                <strong><li>internship (C , java , js ,boostrap)</li></strong>
                  <p><SchoolIcon/><strong>Brototype (2.5 Months)</strong></p>
                  <strong><li>Internship (MERN STACK)</li></strong>
                  <p><SchoolIcon/><strong>Softroniics(7Months)</strong></p>
                </ul>
                <h3 style={{color:'yellow'}}>< LaptopIcon /> Filled Experience</h3>
                <p ><SchoolIcon/><strong >2.4 Years</strong></p>

              </Container>
            </div>
    </Container>
  )
}

export default Resume