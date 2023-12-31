import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <nav class="navbarsm navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid mx-4">
          <Link to={'/'}><img className='ms-5 navbar-logo img-fluid' src="././img/LOGITO.jpeg" alt="logo de acordeones" /></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="ul-navbar navbar-nav d-flex justify-content-between">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Acordeon</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorías
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <NavLink className="text-deco" to={`/categoria/2`}>
                      <p className="dropdown-item">Italianas</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="text-deco" to={`/categoria/3`}>
                      <p className="dropdown-item">Verduleras</p>
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>
    </header>
  )
}

export default NavBar