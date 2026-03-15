import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Product from '../pages/Product'
import LandingPage from '../pages/LandingPage'
import ScrollToHash from '../utils/ScrollToHash'

function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<Product />} />
      </Routes>

    </BrowserRouter>
  )
}

export default AppRouter
