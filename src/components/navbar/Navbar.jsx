import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import '../../assets/styles/Navbar.css';
import logoImage from '../../assets/images/cow/cow.png';

const scrollToSection = (sectionId) => {
  const navbarHeight = document.querySelector('.navbar').offsetHeight;
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - navbarHeight - 70,
      behavior: 'smooth'
    });
  }
};

const CustomNavbar = () => {
  return (
    <Navbar expand="md" bg="custom" variant="dark" className='pt-3 fixed-top'>
      <Navbar.Brand href="#" className="mr-auto">
        <img
          src={logoImage}
          className="d-inline-block align-top logo-image"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className='burguer' />
      <Navbar.Collapse id="responsive-navbar-nav" className='links-area'>
        <Nav className="ml-auto links">
          <Nav.Link className='lnk' href="https://x.com/CashCow_SOL_" target='_blank'>X</Nav.Link>
          <Nav.Link className='lnk' href="https://t.co/euMXYpb4Mf" target='_blank'>Telegram</Nav.Link>
          <Nav.Link className='lnk' href="#">Tokenomics</Nav.Link>
          <Nav.Link className='lnk' href="#">How to Buy</Nav.Link>
          <Nav.Link className='lnk' href="#">Whitepaper</Nav.Link>
        </Nav>
        <a href="#" target='_blank'>
          <Button className='p-2' variant="outline-light"><span>$Moo</span></Button>
        </a>

      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
