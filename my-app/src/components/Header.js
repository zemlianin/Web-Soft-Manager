import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Nav,
    Navbar,
    Container,

} from 'react-bootstrap';

import {
    Route,
    Link,
    BrowserRouter as Router
} from "react-router-dom";

import AppList from "../screens/AppList";

function Header() {
    return (
        <header className="">
            <Navbar bg="white" variant="white">
                <Container>
                    <Navbar.Brand href="#home">AutoSoft</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Создать пакет ПО</Nav.Link>
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