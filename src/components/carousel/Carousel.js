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
                  <h3>Fun Fact Brokoli Pertama</h3>
                  <p>Brokoli adalah tanaman yang berasal dari Italia. Sayuran ini pertama kali ditanam di provinsi Calabria, Italia. Oleh karena itu, pada awalnya sayuran ini diberi nama Calabrese.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Img className="d-block w-100" src="https://akcdn.detik.net.id/api/wm/2020/10/02/tanaman-brokoli_169.jpeg" alt="Second slide" />

                <Carousel.Caption>
                  <h3>Fun Fact Brokoli Kedua</h3>
                  <p>Brokoli adalah sumber vitamin A, vitamin C, potassium, zat besi dan serat terbaik.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Img className="d-block w-100" src="https://cdn.idntimes.com/content-images/post/20200923/1-0ebd7a4c6c372b46f953a2741b57ebe7.jpg" alt="Third slide" />

                <Carousel.Caption>
                  <h3>Fun Fact Brokoli Ketiga</h3>
                  <p>Brokoli mengandung banyak zat phythocemical penting seperti beta-karotin, indoles, dan isotiosianat, yang berfungsi untuk mencegah pembentukan carcinogen, zat penyebab kanker.</p>
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
