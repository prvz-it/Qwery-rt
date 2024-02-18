import { Col, Container, Row } from 'react-bootstrap';
import cultureImg from '../../assets/culture.jpg';
import './Culture.css';

const Culture = () => {
  return (
    <>
    <section id='culture'>
        <Container>
            <Row className='align-items-center'>
                <Col lg={6}>
                    <div className="cultureLeft">
                        <h5>Indonesia Culture</h5>
                        <h2>Our culture here is very friendly to people</h2>
                        <p>known for his politeness, manners and gentleness. This becomes a characteristic when they mingle with other tribes and become basic traits that are passed down by their ancestors.</p>
                        <a href="#">Read more ...</a>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="cultureRight">
                        <img src={cultureImg} alt="Culture image" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Culture