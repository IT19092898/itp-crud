import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
    return (
        <NavbarContainer>
            <nav className="navbar navbar-expand-lg navbar-light px-5 py-0">
              <Link className="navbar-brand" to="#">
                  <span className="logo">HSMS</span>
                 
              </Link>
              <button 
                     className="navbar-toggler" 
                     type="button" 
                     data-toggle="collapse" 
                     data-target="#navbarSupportedContent" 
                     aria-controls="navbarSupportedContent" 
                     aria-expanded="false" 
                     aria-label="Toggle navigation"
              >
                 <span className="navbar-toggler-icon"></span>
              </button>

             <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul className="navbar-nav ml-auto">
                     <li className="nav-item active">
                         <Link className="nav-link" to="/">Home </Link>
                     </li>
                     <li className="nav-item">
                         <Link className="nav-link" to="/">Bookings</Link>
                     </li>
                     <li className="nav-item">
                         <Link className="nav-link" to="/">AD Management</Link>
                     </li>
                     <li className="nav-item">
                         <Link className="nav-link" to="/">About Us</Link>
                     </li>
                     <li className="nav-item">
                         <Link className="nav-link" to="/">Contact Us</Link>
                     </li>
                      
                 </ul>
             </div>
            </nav>
        </NavbarContainer>
    )
}

export default Navbar;

//Navbar container
const NavbarContainer =styled.div`

    background:var(--dark-green);
    padding:2rem 0rem 2rem 0rem !important ;

    .logo{
        padding-right:8rem;
        padding-left:2rem;
    }

    .nav-link{
      color:#FFFFFF !important;
      font-size:21px;
      padding:0rem 3rem 0rem 3rem !important ;
      &:hover{
        font-weight:500;
        background:var(--light-green);   
      }
    }

`;