import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={process.env.PUBLIC_URL + '/icon_kol.png'} alt=""
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;