import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicial from './pages/inicial'
import CustomNavbar from './components/CustomNavbar'
import Faculdade from './pages/Faculdade'
import Footer from './components/Footer'
import Noticias from './pages/Noticias'
import Dpo from './pages/Dpo'



const App = () => {
  return (
    <BrowserRouter>
    <CustomNavbar />
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/a-faculdade" element={<Faculdade />} />
        <Route path="noticias" element={<Noticias />} />
        <Route path="dpo-lgpd" element={<Dpo />} />
      </Routes>
    </Container>
    <Footer />
    </BrowserRouter>
  )
}

export default App