import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'


export default function Nav() {
  return (
    <div className="Nav">
    <nav>
      <Link to='/'>WikiCountries</Link>
    </nav>
    </div>
  )
}
