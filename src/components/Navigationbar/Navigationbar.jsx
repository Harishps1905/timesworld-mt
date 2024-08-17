import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigationbar.css'
import { useDispatch } from 'react-redux';
import { setContinent } from '../../store/countriesSlice';
import { userSignOut } from '../../firebase/auth';


const Navigationbar = () => {
  const dispatch = useDispatch();
  const [activeLink, setActiveLink] = useState('All'); // Initial active state

  const handleClick = (e) => {
    
    const selectedContinent = e.target.innerHTML;
    setActiveLink(selectedContinent); // Update active state
    dispatch(setContinent(selectedContinent)); // Dispatch action to update the state in Redux
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary bg-white">
      <Container>
        <Navbar.Brand href="#" className="nav-title" >Countries</Navbar.Brand>
        <Navbar.Toggle className='border-none' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className=' ms-auto justify-content-end'>
          <Nav className="ms-auto justify-content-end">
          {['All', 'Asia', 'Europe'].map(continent => (
              <span
                key={continent}
                className={activeLink === continent ? 'nav-link activeLink': 'nav-link' }
                onClick={handleClick}
                style={{ color: activeLink === continent ? '#3D3D3D' : '#8B8B8B' }}
              >
                {continent}
              </span>
            ))}
            <span
                className={'nav-link'}
                onClick={()=>userSignOut()}
              >
                Sign Out
              </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigationbar