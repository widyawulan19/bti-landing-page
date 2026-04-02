import './App.css';
import "aos/dist/aos.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './pages/LandingPage';
import Product from './pages/Product';
import ScrollToHash from './utils/ScrollToHash';

function AppRouter() {
  return (
    <>

      {/* <ScrollToHash /> */}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<Product />} />
      </Routes>

    </>
  );
}

export default AppRouter;
