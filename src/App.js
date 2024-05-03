import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <HeroSection/>
        <Services/>
        <About/>
        <Contact/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
