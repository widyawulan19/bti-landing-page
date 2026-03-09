import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import AOS from "aos"
import "aos/dist/aos.css"
import ScrollToHash from './utils/ScrollToHash';

function App() {
  return (
    <div className="App">
      <ScrollToHash />
      <LandingPage />
    </div>
  );
}

export default App;
