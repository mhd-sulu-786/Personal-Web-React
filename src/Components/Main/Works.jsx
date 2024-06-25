import React, { useState } from 'react';
import './works.css';
import { Card, Container, Row, Button } from 'react-bootstrap';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import img1 from '../assist/react-ecommerce.png';
import img2 from '../assist/react-recipe-app.png';
import img3 from '../assist/chat-app.png';
import img4 from '../assist/landingpage.png';
import img5 from '../assist/react-calculator-1.png';
import img6 from '../assist/react-weather-app-1.png';
import img7 from '../assist/react-todo-list.png';
import img8 from '../assist/facebook_login_clone.png';
import img9 from '../assist/QRcodehtmlcss.png';
import img10 from '../assist/Protfoliom4.png';
import img11 from '../assist/hd imge searcher.png';
import img12 from '../assist/profilio.png';
import img13 from '../assist/Futurlearn.png';
import img14 from '../assist/calculator.png';
import img15 from '../assist/NOTE PAD.png';
import img16 from '../assist/text-speech.png';
import img17 from '../assist/clock.png';
import img18 from '../assist/Bmi calculator.png';
import img19 from '../assist/moviefinder.png';
import img20 from '../assist/carshop.png';
import img21 from '../assist/Pumb statement.png';
import img22 from '../assist/diceroller.png';
import img23 from '../assist/open ai.png';
import img24 from '../assist/todolist html.png';
import img25 from '../assist/spacex clone.png';
import img26 from '../assist/wearther html.png';
import img27 from '../assist/Hospital.png';
import img28 from '../assist/mern curd.png';


const Works = () => {
  const [showMore, setShowMore] = useState(false);
  const [filter, setFilter] = useState('All');

  const works_store = [
    {
      Name: 'Ecommerce',
      Image: img1,
      Maker: 'React',
      Description: 'made in react for learning purpose',
      Link: 'https://shanus.vercel.app/',
    },
    {
      Name: 'Recipe App',
      Image: img2,
      Maker: 'React',
      Description: 'made in react for learning purpose',
      Link: 'https://mhd-recipe-app.vercel.app/',
    },
    {
      Name: 'Chat me live',
      Image: img3,
      Maker: 'React',
      Description: ' made in react for learning purpose',
      Link: 'https://chat-me-live.vercel.app/',
    },
    {
      Name: 'Landing page',
      Image: img4,
      Maker: 'HTML&&CSS',
      Description: ' made in HTML&&CSS for learning purpose',
      Link: 'https://mhd-sulu-786.github.io/Landing-Page/',
    },
    {
      Name: 'Calculator',
      Image: img5,
      Maker: 'React',
      Description: 'made in react for learning purpose',
      Link: 'https://react-calculator-git-main-mhd-sulu-786s-projects.vercel.app/',
    },
    {
      Name: 'Weather App',
      Image: img6,
      Maker: 'React',
      Description: 'made in react for learning purpose',
      Link: 'https://react-weather-app-one-mu.vercel.app/',
    },
    {
      Name: 'Todo List',
      Image: img7,
      Maker: 'React',
      Description: 'made in react for learning purpose',
      Link: 'https://reacttasksapp.vercel.app/',
    },
    {
      Name: 'Face book login clone',
      Image: img8,
      Maker: 'HTML&&CSS',
      Description: 'made in HTML&&CSS for learning purpose',
      Link: 'https://mhd-sulu-786.github.io/face-book-login-clone-/',
    },
    {
      Name: 'QR code Generator',
      Image: img9,
      Maker: 'HTML&&CSS',
      Description: ' made in HTML&&CSS for learning purpose',
      Link: 'https://mhd-sulu-786.github.io/Create-QR-Code-/',
    },
    {
      Name: 'Protfolio m4',
      Image: img10,
      Maker: 'HTML&&CSS',
      Description: ' made in HTML&&CSS for learning purpose',
      Link: 'https://profilo-m4.onrender.com/',
    },
    {
      Name: 'HD IMAGE SEARCHER',
      Image: img11,
      Maker: 'HTML&&CSS',
      Description: ' made in HTML&&CSS for learning purpose',
      Link: 'https://image-searcher-zztx.onrender.com/',
    },
    {
      Name: 'Protfolio',
      Image: img12,
      Maker: 'HTML&&CSS',
      Description: ' made in HTML&&CSS for learning purpose',
      Link: 'https://porfolio-2vvd.onrender.com/',
    },
    {
      Name: 'Futur Learn',
      Image: img13,
      Maker: 'HTML&&CSS',
      Description: ' made in HTML&&CSS for learning purpose',
      Link: 'https://lern-now.onrender.com/',
    },
    {
      Name: 'Calculator',
      Image: img14,
      Maker: 'HTML&&CSS',
      Description: ' made in HTML&&CSS for learning purpose',
      Link: 'https://mhd-sulu-786.github.io/calculator/',
    },
    {
      Name: 'NOTE PAD',
      Image: img15,
      Maker: 'HTML&&CSS',
      Description: ' made in HTML&&CSS for learning purpose',
      Link: 'https://mhd-sulu-786.github.io/Note-Pad/',
    },
    {
      Name: 'TEXT to SPEECH',
      Image: img16,
      Maker: 'HTML&&CSS',
      Description: ' made in HTML&&CSS for learning purpose',
      Link: 'https://mhd-sulu-786.github.io/Text-to-Speech/',
    },
    {
      Name: 'Clock',
      Image: img17,
      Maker: 'HTML&&CSS',
      Description: ' made in HTML&&CSS for learning purpose',
      Link: 'https://mhd-sulu-786.github.io/Simple-Clock/',
    },
    {
      Name: 'BMI Caculator',
      Image: img18,
      Maker: 'HTML&&CSS',
      Description: ' made in HTML&&CSS for learning purpose',
      Link: 'https://mhd-sulu-786.github.io/BMI-Caculator/',
    },
    {
      Name: 'Movie finder',
      Image: img19,
      Maker: ' HTML&&CSS',
      Description: ' made in HTML&&CSS for learning purpose',
      Link: 'https://mhd-sulu-786.github.io/Movie_Finder/',
    },
    {
      Name: 'Car shop',
      Image: img20,
      Maker: 'HTML&&CSS',
      Description: ' made in HTML&&CSS for learning purpose',
      Link: 'https://mhd-sulu-786.github.io/Ecommerce/',
    },
    {
      Name: 'Petrol Pumb Statement',
      Image: img21,
      Maker: 'HTML&CSS',
      Description: ' made in HTML&&CSS for learning purpose',
      Link: 'https://mhd-sulu-786.github.io/Pumb-Statement/',
    },
    {
      Name: 'Dice Roller',
      Image: img22,
      Maker: 'HTML&CSS',
      Description: ' made in HTML&&CSS for learning purpose',
      Link: 'https://mhd-sulu-786.github.io/Dice-Roller/',
    },
    {
      Name: 'Open Ai clone(no responsive)',
      Image: img23,
      Maker: 'HTML&CSS',
      Description: ' made in HTML&&CSS for learning purpose',
      Link: 'https://mhd-sulu-786.github.io/Open-Ai/',
    },
    {
      Name: 'Todo',
      Image: img24,
      Maker: 'HTML&CSS',
      Description: ' made in HTML&&CSS for learning purpose',
      Link: 'https://mhd-sulu-786.github.io/TO-DO-List/',
    },
    {
      Name: 'Space X clone(no responsive)',
      Image: img25,
      Maker: 'HTML&CSS',
      Description: ' made in HTML&&CSS for learning purpose',
      Link: 'https://mhd-sulu-786.github.io/SpaceX/',
    },
    {
      Name: 'Weather App',
      Image: img26,
      Maker: 'HTML&CSS',
      Description: ' made in HTML&&CSS for learning purpose',
      Link: 'https://mhd-sulu-786.github.io/Weather/',
    },
    {
      Name: 'Resume Maker',
      Image: img28,
      Maker: 'React',
      Description: ' made in MernStack for learning purpose',
      Link: 'https://resume-build-now.vercel.app/',
    },
    {
      Name: 'Hospital Management Admin',
      Image: img27,
      Maker: 'React',
      Description: ' made in MernStack for learning purpose',
      Link: 'https://hospital-management-frontend-ruby.vercel.app/',
    },
  ];

  const filterWorks = (maker) => {
    setFilter(maker);
  };

  return (
    <Container fluid style={{ width: '100%' }}>
      <Container className="flexs" style={{ padding: '100px' }}>
        <h1 id="WORKS">WORKS</h1>
        <span className="headings" style={{ height: '2px', width: '100px', backgroundColor: 'yellow' }}>
          <div className="anihead" style={{ height: '2px', width: '5%', backgroundColor: '#90d216' }}></div>
        </span>
      </Container>
      <Container className='flexs p-3'>
        <div className="d-flex">
          <Button variant="outline-secondary" onClick={() => filterWorks('All')} className="me-2">
            All
          </Button>
          <Button variant="outline-secondary" onClick={() => filterWorks('React')} className="me-2">
            React
          </Button>
          <Button variant="outline-secondary" onClick={() => filterWorks('HTML&&CSS')} className="me-2">
            HTML & CSS
          </Button>
        </div>
      </Container>

      <Row>
        {works_store
          .filter((val) => (filter === 'All' ? val : val.Maker === filter))
          .slice(0, showMore ? works_store.length : 6)
          .map((val, index) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3" key={index}>
                <Card className="p-2 bg-secondary">
                  <div className="card_content">
                    <img src={val.Image} alt={val.Name} />
                    <div className="div-2 d-flex justify-content-center align-items-center">
                      <a href={val.Link}> <OpenInNewIcon style={{ backgroundColor: 'green' }} /></a>
                    </div>
                  </div>
                  <h3>{val.Name}</h3>
                  <p>{val.Maker}</p>
                </Card>
              </div>
            );
          })}
      </Row>

      <div className="text-center mt-3">
        <Button variant="outline-secondary" onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Show Less' : 'Show More'}
        </Button>
      </div>
    </Container>
  );
};

export default Works;
