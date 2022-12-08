import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ContentTribe() {
    return (
        <Container>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" height={300} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Amaranthus_tricolor0.jpg/480px-Amaranthus_tricolor0.jpg" />
                        <Card.Body>
                            <Card.Title>Bayam</Card.Title>
                            <Card.Text>
                                <b>Bayam</b> (<i>Amaranthus</i>) adalah tumbuhan yang biasa ditanam untuk dikonsumsi daunnya sebagai sayuran hijau. Tumbuhan ini berasal dari Amerika tropik namun sekarang tersebar ke seluruh dunia. Tumbuhan ini dikenal sebagai sayuran sumber zat besi yang penting bagi tubuh.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" height={300} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Buraki_poznan.jpg/295px-Buraki_poznan.jpg" />
                        <Card.Body>
                            <Card.Title>Bit merah </Card.Title>
                            <Card.Text>
                                <b>Bit merah</b> dimasukkan ke dalam kelas Beta vulgaris dan subspecies group vulgaris Conditiva. Karena warnanya yang merah keunguan yang kuat, selain untuk makanan, juga digunakan sebagai pewarna makanan dan pengobatan.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" height={300} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Chinese.cabbage-01.jpg/480px-Chinese.cabbage-01.jpg" />
                        <Card.Body>
                            <Card.Title>Sawi putih</Card.Title>
                            <Card.Text>
                                <b>Sawi putih</b> dikenal sebagai sayuran olahan dalam masakan Tionghoa; karena itu disebut juga sawi cina. Sebutan lainnya adalah petsai. Disebut sawi putih karena daunnya yang cenderung kuning pucat dan tangkai daunnya putih.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" height={300} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Broccoli_and_cross_section_edit.jpg/480px-Broccoli_and_cross_section_edit.jpg" />
                        <Card.Body>
                            <Card.Title>Brokoli</Card.Title>
                            <Card.Text>
                                <b>Brokoli</b> adalah tanaman yang sering dibudidayakan sebagai sayur. Brokoli adalah kultivar dari spesies yang sama dengan kubis dan kembang kol, yaitu Brassica oleracea. Brokoli berasal dari daerah Laut Tengah dan sudah sejak masa Yunani Kuno dibudidayakan.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ContentTribe;