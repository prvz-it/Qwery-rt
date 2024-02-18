import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo from '../../assets/QWERy.png';
import './Menu.css';

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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <Nav.Link href="#link">Cultural</Nav.Link>
            <Nav.Link href="#link">Information</Nav.Link>
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