import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from '../../assets/QWERy.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <Container>
            <Row className='justify-content-between align-items-center;'>
                <Col lg={6} md={6} sm={6}>
                    <div className="footerTop-left">
                        <a href="#"><img src={Logo} alt="Logo" /></a>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={6}>
                    <div className="footerTop-right">
                        <h5>Ready to explore?</h5>
                        <a href="#">Get Started</a>
                    </div>
                </Col>
            </Row>
            <Row className=' my-5 align-items-center'>
                <Col lg={4} md={12}>
                    <div className="footerBox-1">
                        <h4>Let's go on vacation, Make your day</h4>
                        <ul>
                            <li><a href="#"><FaFacebookF/></a></li>
                            <li><a href="#"><FaTwitter/></a></li>
                            <li><a href="#"><FaInstagram/></a></li>
                        </ul>
                    </div>
                </Col>
                <Col lg={{span: 2, offset: 2}} md={4} sm={4} xs={6}>
                    <div className="footerBox-2">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#">Email Marketing</a></li>
                            <li><a href="#">Campaigns</a></li>
                            <li><a href="#">Branding</a></li>
                            <li><a href="#">Offline</a></li>
                        </ul>
                    </div>
                </Col>
                <Col lg={2} md={4} sm={4} xs={6}>
                    <div className="footerBox-3">
                        <h4>About</h4>
                        <ul>
                            <li><a href="#">Our Story</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Benefits</a></li>
                            <li><a href="#">Career</a></li>
                        </ul>
                    </div>
                </Col>
                <Col lg={2} md={4} sm={4} xs={12}>
                    <div className="footerBox-4">
                        <h4>Help</h4>
                        <ul>
                            <li><a href="#">FAQ'S</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <div className="footerDown">
                        <p>Copyright 2023 <a href="#">Rzk-it</a></p>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer