import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './.Navbar.css'; // Ensure the path is correct
import cart from './cart.svg';
import Logo from './logo.png';

const Navbar = ({ cart2 }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("You have been logged out.");
    navigate('/login'); // Redirect to login after logout
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: 'black',
        height: '80px',
      }}
    >
      <div className="container-fluid">
        <div id='navbar' className="navbar-brand text-white py-3">
          <img src={Logo} alt="Company Logo" width="50%" />
        </div>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon " style={{filter:'invert()'}}></span>
        </button>
        <div className="collapse navbar-collapse bg-black text-center py-4" id="navbarNav">
          <ul
            className="navbar-nav "
            style={{
              marginLeft: 'auto',
              gap: '40px',
              textDecoration: 'none',
            }}
          >
            <li className="nav-item">
              <div className="navbar-brand text-white">
                <NavLink to="/"  className={(isActive)=> isActive ? 'color': ''} style={{ textDecoration: 'none',color:'white' }}>
                  Home
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <div className="navbar-brand text-white">
                <NavLink to="/contact" className="text-white" style={{ textDecoration: 'none' }}>
                  Contact
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <div className="navbar-brand text-white">
                <NavLink to="/services" className="text-white" style={{ textDecoration: 'none' }}>
                  Services
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <div className="navbar-brand text-white">
                <NavLink to="/about" className="text-white" style={{ textDecoration: 'none' }}>
                  About
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <div className="navbar-brand text-white">
               
                <NavLink to="/addtocart" className="text-white" style={{ textDecoration: 'none' }}>
                <img src={cart} alt="Cart" style={{ filter: 'invert()' }} /> <sup>{cart2}</sup>
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <div className="navbar-brand text-white">
                {token ? (
                  <button onClick={handleLogout} className="b">
                    Logout
                  </button>
                ) : (
                  <NavLink to="/login">
                    <button className="b">Login</button>
                  </NavLink>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
