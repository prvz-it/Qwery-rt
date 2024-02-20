import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo from '../../assets/QWERy.png';
import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <Navbar expand="lg" className='menu'>
      <Container>
        <Navbar.Brand href="#home">
            <img src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/culture">Cultural</Link>
            <Link to="/information">Information</Link>
          </Nav>
          <div className="menu-button">
            <a href="#">Contact us</a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu