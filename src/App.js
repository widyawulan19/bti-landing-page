import './App.css';
import LandingPage from './pages/LandingPage';
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