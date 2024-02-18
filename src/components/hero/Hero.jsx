import { Col, Container, Row } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  return (
    <>
    <section id="hero">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="hero-text">
              <p>explore the Nature Beauty</p>
              <h1>Discover <span>Wonderful Indonesia</span></h1>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Hero