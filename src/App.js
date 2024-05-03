import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <HeroSection/>
        <Services/>
        <About/>
      </Router>
    </div>
  );
}

export default App;
