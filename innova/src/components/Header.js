import React from 'react';
import '../styles/main.css'; // Asegúrate de incluir tus estilos aquí

function Header() {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        {/* Logo */}
        <a href="index.html" className="logo d-flex align-items-center me-auto">
          {/* Si deseas usar un logo de imagen, descomenta la línea siguiente */}
          {/* <img src="assets/img/logo.png" alt="Logo" /> */}
          <h1 className="sitename">Logis</h1>
        </a>

        {/* Navegación */}
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="index.html" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="services.html">Services</a>
            </li>
            <li>
              <a href="pricing.html">Pricing</a>
            </li>
            <li className="dropdown">
              <a href=" #">
                <span>Dropdown</span>{' '}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a href=" #">Dropdown 1</a>
                </li>
                <li className="dropdown">
                  <a href=" #">
                    <span>Deep Dropdown</span>{' '}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li>
                      <a href=" #">Deep Dropdown 1</a>
                    </li>
                    <li>
                      <a href=" #">Deep Dropdown 2</a>
                    </li>
                    <li>
                      <a href=" #">Deep Dropdown 3</a>
                    </li>
                    <li>
                      <a href=" #">Deep Dropdown 4</a>
                    </li>
                    <li>
                      <a href=" #">Deep Dropdown 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href=" #">Dropdown 2</a>
                </li>
                <li>
                  <a href=" #">Dropdown 3</a>
                </li>
                <li>
                  <a href=" #">Dropdown 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        {/* Botón de acción */}
        <a className="btn-getstarted" href="get-a-quote.html">
          Get a Quote
        </a>
      </div>
    </header>
  );
}

export default Header;
