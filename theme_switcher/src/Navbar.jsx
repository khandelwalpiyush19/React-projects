import React from 'react';

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#333',
    color: '#fff'
  };

  const logoStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  };

  const linksStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem'
  };

  const linkItemStyle = {
    color: '#fff',
    textDecoration: 'none'
  };

  const toggleStyle = {
    display: 'none'
  };

  const mediaQuery = `
    @media (max-width: 768px) {
      .navbar-links {
        display: none;
        flex-direction: column;
        background-color: #333;
        width: 100%;
        position: absolute;
        top: 4rem;
        left: 0;
      }

      .navbar-links li {
        padding: 1rem;
        text-align: center;
      }

      .navbar-toggle {
        display: block;
      }

      #menu-toggle:checked + .navbar-links {
        display: flex;
      }
    }
  `;

  return (
    <nav style={navbarStyle}>
      <div>
        <a href="/" style={logoStyle}>MyApp</a>
      </div>
      <ul className="navbar-links" style={linksStyle}>
        <li><a href="/" style={linkItemStyle}>Home</a></li>
        <li><a href="/about" style={linkItemStyle}>About</a></li>
        <li><a href="/services" style={linkItemStyle}>Services</a></li>
        <li><a href="/contact" style={linkItemStyle}>Contact</a></li>
      </ul>
      <div className="navbar-toggle" style={toggleStyle}>
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle">&#9776;</label>
      </div>
      <style>
        {mediaQuery}
      </style>
    </nav>
  );
}

export default Navbar;
