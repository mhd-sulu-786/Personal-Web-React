import './App.css';
import About from './Components/Main/About';
import Contact from './Components/Main/Contact';
import Home from './Components/Main/Home';
import Resume from './Components/Main/Resume';
import Works from './Components/Main/Works';
import ResponsiveAppBar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className='app d-flex justify-content-center align-items-center flex-column  '  >
      <ResponsiveAppBar />
      <Home />
      <About />
      <Resume />
      <Works />
      <Contact />

    </div>
  );
}

export default App;
