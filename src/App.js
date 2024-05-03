import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from './Components/HeroSection';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <HeroSection/>
      </Router>
    </div>
  );
}

export default App;
