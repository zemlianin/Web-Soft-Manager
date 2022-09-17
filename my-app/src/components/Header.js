import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Nav, Navbar, Container,

} from 'react-bootstrap';

function Header() {
    return (
        <header className="">
            <Navbar bg="white" variant="white">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Windows</Nav.Link>
                        <Nav.Link href="#features">Mac</Nav.Link>
                        <Nav.Link href="#pricing">IOS</Nav.Link>
                        <Nav.Link href="#pricing">Android</Nav.Link>
                    </Nav>
                    <Nav.Link href="#pricing">Profile</Nav.Link>
                </Container>
            </Navbar>
        </header>);
}

export default Header;