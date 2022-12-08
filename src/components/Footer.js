import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from "./footer.module.css";

const Footer = () => {
    return (
        <div>
            <Container>
            <Row>
                <Col>
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
                </Col>
                <Col>
                <p>Our services</p>
                <p>Why Us</p>
                <p>Testimonial</p>
                <p>FAQ</p>
                </Col>
                <Col>
                <p>Connect With Us</p>
                <div  >
                <img src={process.env.PUBLIC_URL + '/icon_facebook.png'} alt="" />
                <img src={process.env.PUBLIC_URL + '/instagram.png'} alt="" />
                <img src={process.env.PUBLIC_URL + '/icon_twitter.png'} alt="" />
                <img src={process.env.PUBLIC_URL + '/icon_mail.png'} alt="" />
                <img src={process.env.PUBLIC_URL + '/icon_twitch.png'} alt="" />
                </div>
                </Col>
                <Col>
                <p>Copyright Binar 2022</p>
                
                <div >
                    <p>Sayurku</p>
                    </div>                
                </Col>
            </Row>
        </Container>
        </div>
        
    
    )
}

export default Footer;