import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

const Img = styled.img`
  height: 300px;
  object-fit: cover;
`;

const CarouselTribe = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col xs="10">
            <Carousel fade>
              <Carousel.Item>
                <Img className="d-block w-100" src="https://image.kabarbumn.com/3/0/5/1/3051.JPG" alt="First slide" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Img className="d-block w-100" src="https://akcdn.detik.net.id/api/wm/2020/10/02/tanaman-brokoli_169.jpeg" alt="Second slide" />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Img className="d-block w-100" src="https://cdn.idntimes.com/content-images/post/20200923/1-0ebd7a4c6c372b46f953a2741b57ebe7.jpg" alt="Third slide" />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CarouselTribe;
