import { Col, Container, Row } from 'react-bootstrap';
import './About_hero.css';

const About_hero = () => {
  return (
    <>
    <section id="about_hero">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="about_hero-text">
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

export default About_hero