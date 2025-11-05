import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <Link to="/">Inicial</Link> <br />
        <Link to="/Contato">Contato</Link> <br />
        <Link to="/dpo-Lgpd">DpoLgpd</Link> <br />
        <Link to="/a-faculdade">Faculdade</Link> <br />
        <Link to="/Noticias">Noticias</Link>
    </nav>
  )
}

export default NavBar