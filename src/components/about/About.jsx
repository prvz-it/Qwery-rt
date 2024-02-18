import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../../assets/about-01.jpg';
import './About.css';

const About = () => {
  return (
    <section id="about">
        <Container>
            <Row className='align-items-center'>
                <Col lg={6}>
                    <div className="aboutLeft">
                        <img src={aboutImg} alt="About Image" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="aboutRight">
                        <h5>East NUSA Southeast</h5>
                        <h2>Have you enjoyed your holiday?</h2>
                        <p>You will be amazed if you take part in this sailing Komodo island tour package. So it is also mandatory for you, besides enjoying Komodo tourism on Komodo Island, you also have to taste the marine tourism.  The beautiful waters of Komodo will make you meet many travelers from other countries.</p>
                        <a href="#">Read more ...</a>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default About