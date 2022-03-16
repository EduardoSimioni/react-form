import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Cart from '../containers/Cart/index'
import Home from '../containers/Home/index'

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
