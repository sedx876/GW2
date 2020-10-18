import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <NavLink 
      className="nav-link" 
      exact activeClassName="active" 
      to='/home'>
      <img className='theD3' />Ghost Walk</NavLink>

    <button className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarColor01" 
            aria-controls="navbarColor01" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">

      <li className="nav-item">
        <NavLink 
          className="nav-link" 
          exact activeClassName="active" 
          to='/about'>
          <img className='dLogo' />About</NavLink>
      </li>
      
      <li className="nav-item">
        <NavLink 
          className="nav-link" 
          exact activeClassName="active" 
          to='/characters'>
          <img className='tyr' />Behind The Scenes</NavLink>
      </li>

      <li className="nav-item">
        <NavLink 
        className="nav-link" 
        exact activeClassName="active" 
        to='/characters/new'>
        <img className='barLogo' />Press</NavLink>
      </li>

      <li className="nav-item">
        <NavLink 
          className="nav-link" 
          exact activeClassName="active" 
          to='/farminglist'>
          <img className='dhLogo' />Films</NavLink>
      </li>

      <li className="nav-item">
        <NavLink 
          className="nav-link" 
          exact activeClassName="active" 
          to='/farminglist/new'>
          <img className='monkLogo' />Development</NavLink>
      </li>

      <li className="nav-item">
        <NavLink 
          className="nav-link" 
          exact activeClassName="active" 
          to='/links'>
          <img className='portal' />News</NavLink>
      </li>

      <li className="nav-item">
        <NavLink 
          className="nav-link" 
          exact activeClassName="active" 
          to='/links'>
          <img className='portal' />More</NavLink>
      </li>

          <li className="nav-item">
          <NavLink 
          className="nav-link" 
          exact activeClassName="active" 
          to='/links'>
          <img className='portal' />Contact</NavLink>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Navbar