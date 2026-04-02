import './App.css';
import "aos/dist/aos.css";

import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Product from './pages/Product';
import ScrollToHash from './utils/ScrollToHash';

function App() {
  return (
    <div className="App">
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<Product />} />
      </Routes>

    </div>
  );
}

export default App;